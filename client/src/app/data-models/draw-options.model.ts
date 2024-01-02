export interface Point {
	x: number;
	y: number;
}

export interface DrawProps {
	ctx: CanvasRenderingContext2D;
	currentPoint: Point;
	prevPoint: Point | undefined;
}
