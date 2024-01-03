import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Socket } from 'ngx-socket-io';

@Component({
	selector: 'app-create-room-form',
	templateUrl: './create-room-form.component.html',
	styleUrl: './create-room-form.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateRoomFormComponent {
	isLoading: boolean = false;
	@Input({ required: true }) roomId: string = '';

	constructor(
		private fb: FormBuilder,
		private socket: Socket
	) {}

	ngOnInit(): void {}

	createRoomForm = this.fb.nonNullable.group({
		username: ['', Validators.required]
	});

	onSubmit(): void {
		this.isLoading = true;
        this.socket.emit('create-room', [this.roomId, this.createRoomForm.value.username])
	}
}
