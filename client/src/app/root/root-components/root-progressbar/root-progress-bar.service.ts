import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';

export interface ProgressBarConfig {
    dataLoading?: boolean;
    overlay?: boolean;
}

@Injectable({providedIn: 'root'})
export class RootProgressBarService {
    private $progressBar = new BehaviorSubject<ProgressBarConfig>({dataLoading: false, overlay: false});
    progressBar: Observable<ProgressBarConfig> = this.$progressBar.asObservable();

    showProgressBar(config?: ProgressBarConfig) {
        this.$progressBar.next({
            dataLoading: true,
            overlay: true,
            ...(config || {})
        });
    }

    hideProgressBar() {
        this.$progressBar.next({dataLoading: false, overlay: false});
    }
}