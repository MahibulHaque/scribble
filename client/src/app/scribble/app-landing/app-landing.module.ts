import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { RouterLinkDirective } from '../../shared-directive/router-link.directive.ts.directive';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateRoomFormComponent } from './components/create-room-form/create-room-form.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CopyButtonComponent } from './components/copy-button/copy-button.component';
import { SharedDirectiveModule } from '../../shared-directive/shared-directive.module';
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
		SharedDirectiveModule
	]
})
export class AppLandingModule {}
