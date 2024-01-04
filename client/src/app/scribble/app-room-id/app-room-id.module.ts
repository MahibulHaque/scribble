import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoomRoutingModule } from './app-room-id.routing.module';
import { RoomLayoutComponent } from './components/room-layout/room-layout.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

// @NgModule decorator with its metadata
@NgModule({
	declarations: [RoomLayoutComponent],
	imports: [
		CommonModule,
		AppRoomRoutingModule,
		NgxSkeletonLoaderModule.forRoot({ animation: 'pulse' })
	]
})
export class AppRoomModule {}
