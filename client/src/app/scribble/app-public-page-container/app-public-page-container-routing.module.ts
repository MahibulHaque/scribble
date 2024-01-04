import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonLayoutComponent } from './components/common-layout/common-layout.component';
import { RoomLayoutComponent } from '../app-room-id/components/room-layout/room-layout.component';
import { DynamicRoomIdGuard } from './guards/dynamic-room-id-guard.guard';

const routes: Routes = [
	{
		path: '',
		component: CommonLayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () =>
					import('../app-landing/app-landing.module').then((m) => m.AppLandingModule)
			}
		]
	},
	{
		path: ':id',
		component: RoomLayoutComponent,
		canActivate: [DynamicRoomIdGuard],
		runGuardsAndResolvers: 'always',
		children: [
			{
				path: '',
				loadChildren: () => import('../app-room-id/app-room-id.module').then((m) => m.AppRoomModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AppPublicPageContainerRoutingModule {}
