import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { AppPublicPageContainerRoutingModule } from "./app-public-page-container-routing.module";
import { CommonLayoutComponent } from "./components/common-layout/common-layout.component";

@NgModule({
    declarations: [CommonLayoutComponent],
    imports: [
        CommonModule,
        RouterOutlet,
        AppPublicPageContainerRoutingModule
    ]
})
export class AppPublicPageContainerModule { }
