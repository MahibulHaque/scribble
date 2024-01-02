import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('../scribble/app-public-page-container/app-public-page-container.module').then(
				(m) => m.AppPublicPageContainerModule
			)
	},
	{
		path:'404',
		loadComponent: ()=>import('../shared-components/not-found/not-found.component').then(c=>c.NotFoundComponent)
	},

	{
		path: '**',
		redirectTo: '/404'
	}
];
