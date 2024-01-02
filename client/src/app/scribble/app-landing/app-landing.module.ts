import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { RouterLinkDirective } from '../../shared-directive/router-link.directive.ts.directive';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LandingComponent
      }
    ]),
    RouterLinkDirective
  ]
})
export class AppLandingModule { }
