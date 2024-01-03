import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { CustomSnackBarComponent } from '../shared-components/custom-snackbar-component/custom-snackbar-component.component';

@Injectable()
export class GenericToastService {
  defaultConfig: MatSnackBarConfig = {
    duration: 2500,
    panelClass: 'admin-panel-update',
    data: { message: 'Successful', iconName: 'close' },
  };
  constructor(private matSnackBar: MatSnackBar) {}
  showSuccessToast(successMessage?: string, config?: MatSnackBarConfig) {
    config = config ?? this.defaultConfig;
    if (successMessage) config.data.message = successMessage;
    this.matSnackBar.openFromComponent(CustomSnackBarComponent, config);
  }

  showErrorToast(errorMessage?: string, config?: MatSnackBarConfig) {
    config = config ?? this.defaultConfig;
    if (errorMessage) config.data.message = errorMessage;
    config.data.error = true;
    this.matSnackBar.openFromComponent(CustomSnackBarComponent, config);
  }
}
