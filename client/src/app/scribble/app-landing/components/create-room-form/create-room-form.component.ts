import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Socket } from 'ngx-socket-io';
import { selectUser } from '../../../../store/user/user.selector';
import { Observable } from 'rxjs';
import { User } from '../../../../data-models/user.interface';
import { selectMembers } from '../../../../store/members/members.selector';
import { GenericToastService } from '../../../../shared-services/generic-toast.service';
import { RoomJoinedData } from '../../../../data-models/room-join-data.model';
import * as UserActions from '../../../../store/user/user.action';
import * as MemberActions from '../../../../store/members/members.action';
import { Router } from '@angular/router';

@Component({
	selector: 'app-create-room-form',
	templateUrl: './create-room-form.component.html',
	styleUrl: './create-room-form.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateRoomFormComponent {
	isLoading: boolean = false;
	user$: Observable<User | null>;
	member$: Observable<User[]> = new Observable<User[]>();

	@Input({ required: true }) roomId: string = '';

	constructor(
		private fb: FormBuilder,
		private store: Store,
		private socket: Socket,
		private router: Router,
		private toastService: GenericToastService
	) {
		this.user$ = this.store.pipe(select(selectUser));
		this.member$ = this.store.pipe(select(selectMembers));
	}

	ngOnInit(): void {
		this.socket.on('room-joined', ({ user, roomId, members }: RoomJoinedData) => {
			this.store.dispatch(UserActions.setUser({ user }));
			this.store.dispatch(MemberActions.setMembers({ members }));
			this.router.navigate([`/${roomId}`], { replaceUrl: true });
		});

		this.socket.on('room-not-found', () => {
			this.handleErrorMessage('Room not found');
		});

		this.socket.on('invalid-data', () => {
			this.handleErrorMessage('Invalid data provided');
		});
	}

	createRoomForm = this.fb.nonNullable.group({
		username: ['', [Validators.required, Validators.minLength(5)]]
	});

	ngOnDestroy(): void {
		this.socket.off('room-joined');
		this.socket.off('room-not-found');
		this.socket.off('invalid-data');
	}

	onSubmit(): void {
		this.isLoading = true;
		this.socket.emit('create-room', {
			roomId: this.roomId,
			username: this.createRoomForm.value.username
		});
	}

	private handleErrorMessage(message: string): void {
		this.toastService.showErrorToast(message);
	}
}
