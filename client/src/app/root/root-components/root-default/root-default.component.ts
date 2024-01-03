import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
    NavigationCancel, NavigationEnd, NavigationStart, Router, RouterOutlet
} from "@angular/router";
import {
    skip, Subject, takeUntil, tap
} from "rxjs";

import { BROWSER_PLATFORM } from "../../../utility/platform";
import { RootUiService } from "../../root-services/root-ui.service";
import { RootProgressBarComponent } from "../root-progressbar/root-progressbar.component";

@Component({
    selector: "app-root-default",
    standalone: true,
    templateUrl: "./root-default.component.html",
    styleUrl: "./root-default.component.scss",
    imports: [
        CommonModule,
        RouterOutlet,
        RootProgressBarComponent
    ]
})
export class RootDefaultComponent {
    private destroy$ = new Subject<void>();

    isBrowser = BROWSER_PLATFORM;

    constructor(private router: Router, private rootUiService:RootUiService) {

    }

    ngOnInit():void {
        if (BROWSER_PLATFORM) {
            this.router.events
                .pipe(
                    takeUntil(this.destroy$),
                    skip(1),
                    tap((event) => {
                        switch (true) {
                            case event instanceof NavigationStart:
                                return this.rootUiService.showProgressBar(false);
                            case event instanceof NavigationEnd:
                                return this.rootUiService.hideProgressBar();
                            case event instanceof NavigationCancel:
                                return this.rootUiService.hideProgressBar();
                        }
                    }),
                )
                .subscribe();
        }
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
