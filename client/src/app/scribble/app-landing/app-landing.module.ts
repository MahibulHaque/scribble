import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

import { RouterLinkDirective } from '../../shared-directive/router-link.directive.ts.directive';
import { SharedDirectiveModule } from '../../shared-directive/shared-directive.module';
import { CopyButtonComponent } from './components/copy-button/copy-button.component';
import { CreateRoomFormComponent } from './components/create-room-form/create-room-form.component';
import { LandingComponent } from './components/landing/landing.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../../store/user/user.selector';
import { GenericToastService } from '../../shared-services/generic-toast.service';
import {
	JoinRoomButtonComponent,
	JoinRoomDialogComponent
} from './components/join-room-dialog/join-room-dialog.component';

@NgModule({
	declarations: [
		LandingComponent,
		CreateRoomFormComponent,
		CopyButtonComponent,
		JoinRoomButtonComponent,
		JoinRoomDialogComponent
	],
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
		MatDialogModule,
		SharedDirectiveModule
	],
	providers: [GenericToastService]
})
export class AppLandingModule {}
