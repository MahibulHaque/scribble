import { LocationStrategy } from "@angular/common";
import {
    Attribute, Directive, ElementRef, Input, Renderer2
} from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";

@Directive({
    selector: "[appRouterLink]",
    standalone: true
})
export class RouterLinkDirective extends RouterLink {
    @Input() override set routerLink(commands: any[] | string | null | undefined) {
        super.routerLink = commands;
    }
    @Input({ alias: "appRouterLink", required: true }) set linkToNavigate(
        commands: any[] | string | null | undefined
    ) {
        this._linkToNavigate = commands;
        this.routerLink = commands;
    }

    private _linkToNavigate: any[] | string | null | undefined;
    constructor(
        _router: Router,
        _route: ActivatedRoute,
        @Attribute("tabindex") readonly _tabIndexAttribute: string | null | undefined,
        readonly _renderer: Renderer2,
        readonly _el: ElementRef,
        _locationStrategy?: LocationStrategy
    ) {
        super(_router, _route, _tabIndexAttribute, _renderer, _el, _locationStrategy);
    }
}
