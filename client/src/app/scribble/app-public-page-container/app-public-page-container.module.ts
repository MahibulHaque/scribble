import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CommonLayoutComponent } from './components/common-layout/common-layout.component';
import { AppPublicPageContainerRoutingModule } from './app-public-page-container-routing.module';



@NgModule({
  declarations: [CommonLayoutComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    AppPublicPageContainerRoutingModule
  ]
})
export class AppPublicPageContainerModule { }
