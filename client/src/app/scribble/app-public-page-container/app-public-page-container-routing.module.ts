import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './components/common-layout/common-layout.component';

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
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AppPublicPageContainerRoutingModule {}
