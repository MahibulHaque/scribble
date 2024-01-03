import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppPublicPageContainerRoutingModule } from './app-public-page-container-routing.module';
import { CommonLayoutComponent } from './components/common-layout/common-layout.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { StoreModule } from '@ngrx/store';

const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };
@NgModule({
	declarations: [CommonLayoutComponent],
	imports: [
		CommonModule,
		RouterOutlet,
		AppPublicPageContainerRoutingModule,
		SocketIoModule.forRoot(config),
	]
})
export class AppPublicPageContainerModule {}
