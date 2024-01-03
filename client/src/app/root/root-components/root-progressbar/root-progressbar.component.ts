import {
    animate, state, style, transition, trigger
} from "@angular/animations";
import { AsyncPipe, NgIf } from "@angular/common";
import {
    ChangeDetectionStrategy, Component, Input, ViewEncapsulation
} from "@angular/core";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { Observable } from "rxjs";

import { ProgressBarConfig, RootProgressBarService } from "./root-progress-bar.service";

@Component({
    selector: "app-progress-bar",
    templateUrl: "./root-progressbar.component.html",
    styleUrls: ["./root-progressbar.component.scss"],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatProgressBarModule, NgIf, AsyncPipe],
    animations: [
        [
            trigger("fade", [
                state("void", style({ opacity: 0 })),
                transition("* <=> void", [animate(200)])
            ])
        ]
    ]
})
export class RootProgressBarComponent {
    @Input() style: string = "";
    @Input() class: string = "";

    progressBar: Observable<ProgressBarConfig> = this.progressBarService.progressBar;

    constructor(private progressBarService: RootProgressBarService) {}
}
