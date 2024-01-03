import { Component, Inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
	selector: 'app-custom-snack-bar',
	standalone: true,
	imports: [MatSnackBarModule, MatIconModule],
	templateUrl: './custom-snackbar-component.component.html',
	styleUrl: './custom-snackbar-component.component.scss'
})
export class CustomSnackBarComponent implements OnInit {
	constructor(
		private matSnackBarRef: MatSnackBarRef<CustomSnackBarComponent>,
		@Inject(MAT_SNACK_BAR_DATA) public data: { message: string; error: boolean; iconName: string }
	) {}

	ngOnInit(): void {}

	close() {
		this.matSnackBarRef.dismiss();
	}
}
