import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { userFeatureKey, userReducer } from '../store/user/user.selector';
import { routes } from './app.routes';
import { membersFeatureKey, membersReducers } from '../store/members/members.selector';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideAnimations(),
		provideStore(),
		provideState(userFeatureKey, userReducer),
		provideState(membersFeatureKey, membersReducers)
	]
};
