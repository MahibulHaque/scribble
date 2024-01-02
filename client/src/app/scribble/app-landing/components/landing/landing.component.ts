import { Component } from '@angular/core';
import { nanoid } from 'nanoid';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss'
})
export class LandingComponent {
	roomId: string = '';

	ngOnInit() {
		this.roomId = nanoid();
	}
}
