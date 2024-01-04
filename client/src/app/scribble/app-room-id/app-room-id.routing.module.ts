import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomLayoutComponent } from './components/room-layout/room-layout.component';
import { DrawCanvasComponent } from './components/draw-canvas/draw-canvas.component';

const routes: Routes = [
	{
		path: '',
		component: DrawCanvasComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AppRoomRoutingModule {}
