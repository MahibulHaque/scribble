import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import {
	AbstractControl,
	FormBuilder,
	FormGroup,
	ValidationErrors,
	Validators
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Socket } from 'ngx-socket-io';

@Component({
	selector: 'app-join-room-dialog',
	templateUrl: './join-room-dialog.component.html',
	styleUrl: './join-room-dialog.component.scss',
	changeDetection:ChangeDetectionStrategy.OnPush
})
export class JoinRoomDialogComponent {
	isLoading = false;

	joinRoomForm: FormGroup = this.fb.group({
		username: ['', [Validators.required, Validators.minLength(5)]],
		roomId: [
			'',
			[
				Validators.required,
				Validators.minLength(21),
				Validators.maxLength(21),
				NameWhiteSpace.noSpaceAllowed
			]
		]
	});

	constructor(
		private dialogRef: MatDialogRef<JoinRoomDialogComponent>,
		@Inject(MAT_DIALOG_DATA) private data: any,
		private fb: FormBuilder,
		private cdr: ChangeDetectorRef,
		private socket: Socket
	) {}

	ngOnInit(): void {
		this.socket.on('room-not-found', () => {
			this.isLoading = false;
		});
	}

	onSubmit() {
		if (this.joinRoomForm.valid) {
			this.isLoading = true;
			this.socket.emit('join-room', {
				roomId: this.joinRoomForm.value.roomId,
				username: this.joinRoomForm.value.username
			});
			setTimeout(() => {
				this.isLoading = false;
				this.cdr.detectChanges();
			}, 1000);
		}
	}

	getFormControl(controlName: string): AbstractControl | null {
		return this.joinRoomForm.get(controlName);
	}
}

@Component({
	selector: 'app-join-room-button',
	template: `
		<button class="w-full" mat-stroked-button color="primary" (click)="openDialog()">
			Join a Room
		</button>
	`
})
export class JoinRoomButtonComponent {
	constructor(private dialog: MatDialog) {}

	openDialog(): void {
		const dialogRef = this.dialog.open(JoinRoomDialogComponent, {
			width: '400px',
			data: {}
		});

		// You can subscribe to the dialog's afterClosed event to perform actions when the dialog is closed
		dialogRef.afterClosed().subscribe(() => {});
	}
}

export class NameWhiteSpace {
	static noSpaceAllowed(control: AbstractControl): ValidationErrors | null {
		if ((control.value as string).indexOf(' ') >= 0) {
			return { noSpaceAllowed: true };
		}
		return null;
	}
}
