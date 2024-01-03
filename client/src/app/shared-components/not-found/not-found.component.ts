import { Component } from "@angular/core";

import { RouterLinkDirective } from "../../shared-directive/router-link.directive.ts.directive";

@Component({
    selector: "app-not-found",
    standalone: true,
    imports: [RouterLinkDirective],
    templateUrl: "./not-found.component.html",
    styleUrl: "./not-found.component.scss"
})
export class NotFoundComponent {

}
