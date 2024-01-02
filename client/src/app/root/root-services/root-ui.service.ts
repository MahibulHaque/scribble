import { Injectable } from '@angular/core';
import { ProgressBarConfig, RootProgressBarService } from '../root-components/root-progressbar/root-progress-bar.service';
import { Router } from '@angular/router';
import { BROWSER_PLATFORM } from '../../utility/platform';

@Injectable({
	providedIn: 'root'
})
export class RootUiService {
	constructor(private progressBarService: RootProgressBarService, private router: Router) {}


  showProgressBar(showOverlay?: boolean): void;
  showProgressBar(config?: ProgressBarConfig): void;
  showProgressBar(configOrShowOverLay?: ProgressBarConfig | boolean): void {
    if (BROWSER_PLATFORM) {
      if (configOrShowOverLay === undefined) {
        this.progressBarService.showProgressBar();
      } else {
        // tslint:disable-next-line:max-line-length
        const config =
          typeof configOrShowOverLay === 'boolean'
            ? ({overlay: configOrShowOverLay} as ProgressBarConfig)
            : configOrShowOverLay;
        this.progressBarService.showProgressBar(config);
      }
    }
  }

  hideProgressBar() {
    this.progressBarService.hideProgressBar();
  }
}
