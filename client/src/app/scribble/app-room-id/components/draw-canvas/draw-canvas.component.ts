import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
	selector: 'app-draw-canvas',
	standalone: true,
	imports: [NgxSkeletonLoaderModule],
	templateUrl: './draw-canvas.component.html',
	styleUrl: './draw-canvas.component.scss'
})
export class DrawCanvasComponent {
	isCanvasLoading: boolean = true;
}
