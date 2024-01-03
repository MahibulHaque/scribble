import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

import { RouterLinkDirective } from '../../shared-directive/router-link.directive.ts.directive';
import { SharedDirectiveModule } from '../../shared-directive/shared-directive.module';
import { CopyButtonComponent } from './components/copy-button/copy-button.component';
import { CreateRoomFormComponent } from './components/create-room-form/create-room-form.component';
import { LandingComponent } from './components/landing/landing.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../../store/user/user.selector';

@NgModule({
	declarations: [LandingComponent, CreateRoomFormComponent, CopyButtonComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: '',
				component: LandingComponent
			}
		]),
		RouterLinkDirective,
		ReactiveFormsModule,
		MatCardModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule,
		SharedDirectiveModule,
		StoreModule.forFeature('user', userReducer)
	]
})
export class AppLandingModule {}
