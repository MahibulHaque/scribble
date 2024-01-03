import { ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
	selector: 'app-copy-button',
	templateUrl: './copy-button.component.html',
	styleUrl: './copy-button.component.scss'
})
export class CopyButtonComponent {
	@Input({ required: true }) value: string = '';
	hasCopied: boolean = false;

	constructor(private cdr: ChangeDetectorRef) {}
	
	ngOnInit(): void {}

	copyToClipboard(): void {
		navigator.clipboard.writeText(this.value);
		this.hasCopied = true;

		setTimeout(() => {
			this.hasCopied = false;
			this.cdr.detectChanges();
		}, 2000);
	}
}
