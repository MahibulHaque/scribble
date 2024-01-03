import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { RoomJoinedData } from '../data-models/room-join-data.model';

@Injectable({
	providedIn: 'root'
})
export class SocketRoomService {
	roomJoined$!: Observable<RoomJoinedData>;
	roomNotFound$!: Observable<{ message: string }>;
	invalidData$!: Observable<{ message: string }>;

	constructor(private socket: Socket) {
		this.roomJoined$ = this.socket.fromEvent<RoomJoinedData>('room-joined');
		this.roomNotFound$ = this.socket.fromEvent<{ message: string }>('room-not-found');
		this.invalidData$ = this.socket.fromEvent<{ message: string }>('invalid-data');
	}
}
