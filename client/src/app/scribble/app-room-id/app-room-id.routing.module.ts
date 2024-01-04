import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomLayoutComponent } from './components/room-layout/room-layout.component';

const routes: Routes = [
	{
		path: '',
		component: RoomLayoutComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AppRoomRoutingModule {}
