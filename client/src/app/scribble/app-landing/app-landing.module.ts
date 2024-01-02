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
@NgModule({
	declarations: [LandingComponent, CreateRoomFormComponent],
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
		MatProgressSpinnerModule
	]
})
export class AppLandingModule {}
