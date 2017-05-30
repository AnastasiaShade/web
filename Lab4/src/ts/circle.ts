const DEFAULT_CIRCLE_RADIUS: number = 40;
const DEFAULT_CIRCLE_POSITION_X: number = 50;
const DEFAULT_CIRCLE_POSITION_Y: number = 50;
const CIRCLE_LINE_WIDTH: number = 5;
const DEFAULT_CIRCLE_FILL_COLOR: string = "#f00";
const DEFAULT_CIRCLE_BORDER_COLOR: string = "#000";

import {Shape} from "./shape";

class Circle extends Shape {
    private _radius: number;
    private _positionX: number;
    private _positionY: number;

    constructor() {
        super();
        this.fillColor = DEFAULT_CIRCLE_FILL_COLOR;
        this.borderColor = DEFAULT_CIRCLE_BORDER_COLOR;
        this._radius = DEFAULT_CIRCLE_RADIUS;
        this._positionX = DEFAULT_CIRCLE_POSITION_X;
        this._positionY = DEFAULT_CIRCLE_POSITION_Y;
    }

    public set radius(radius: number) {
        this._radius = radius;
    }

    public get radius(): number {
        return this._radius;
    }

    public set positionX(x: number) {
        this._positionX = x;
    }

    public get positionX(): number {
        return this._positionX;
    }

    public set positionY(y: number) {
        this._positionY = y;
    }

    public get positionY(): number {
        return this._positionY;
    }

    public Draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this._positionX, this._positionY, this._radius, 0, Math.PI * 2);
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.lineWidth = CIRCLE_LINE_WIDTH;
        ctx.strokeStyle = this.borderColor;
        ctx.stroke();
    }

    public CalculateArea(): number {
        return Math.round(Math.PI * this._radius * this._radius);
    }

    public CalculatePerimeter(): number {
        return Math.round(2 * Math.PI * this._radius);
    }
}

export {Circle}
