import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoomRoutingModule } from './app-room-id.routing.module';
import { RoomLayoutComponent } from './components/room-layout/room-layout.component';

// @NgModule decorator with its metadata
@NgModule({
	declarations: [RoomLayoutComponent],
	imports: [CommonModule, AppRoomRoutingModule]
})
export class AppRoomModule {}
