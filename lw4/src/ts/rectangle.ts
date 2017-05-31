const DEFAULT_RECTANGLE_POSITION_X1: number = 30;
const DEFAULT_RECTANGLE_POSITION_Y1: number = 30;
const DEFAULT_RECTANGLE_POSITION_X2: number = 100;
const DEFAULT_RECTANGLE_POSITION_Y2: number = 100;
const RECTANGLE_LINE_WIDTH: number = 8;
const DEFAULT_RECTANGLE_FILL_COLOR: string = "#f00";
const DEFAULT_RECTANGLE_BORDER_COLOR: string = "#000";

import {Shape} from "./shape";

class Rectangle extends Shape {
    private _positionX1: number;
    private _positionY1: number;
    private _positionX2: number;
    private _positionY2: number;

    constructor() {
        super();
        this.fillColor = DEFAULT_RECTANGLE_FILL_COLOR;
        this.borderColor = DEFAULT_RECTANGLE_BORDER_COLOR;
        this._positionX1 = DEFAULT_RECTANGLE_POSITION_X1;
        this._positionY1 = DEFAULT_RECTANGLE_POSITION_Y1;
        this._positionX2 = DEFAULT_RECTANGLE_POSITION_X2;
        this._positionY2 = DEFAULT_RECTANGLE_POSITION_Y2;
    }

    public set positionX1(x1: number) {
        this._positionX1 = x1;
    }

    public get positionX1(): number {
        return this._positionX1;
    }

    public set positionY1(y1: number) {
        this._positionY1 = y1;
    }

    public get positionY1(): number {
        return this._positionY1;
    }

    public set positionX2(x2: number) {
        this._positionX2 = x2;
    }

    public get positionX2(): number {
        return this._positionX2;
    }

    public set positionY2(y2: number) {
        this._positionY2 = y2;
    }

    public get positionY2(): number {
        return this._positionY2;
    }

    public Draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.fillStyle = this.fillColor;
        ctx.strokeStyle = this.borderColor;
        ctx.lineWidth = RECTANGLE_LINE_WIDTH;
        ctx.fillRect(
            this._positionX1,
            this._positionY1,
            this._positionX2 - this._positionX1,
            this._positionY2 - this._positionY1);
        ctx.strokeRect(
            this._positionX1,
            this._positionY1,
            this._positionX2 - this._positionX1,
            this._positionY2 - this._positionY1);
    }

    public CalculateArea(): number {
        return ((this._positionX2 - this._positionX1) * (this._positionY2 - this._positionY1));
    }

    public CalculatePerimeter(): number {
        return (2 * ((this._positionX2 - this._positionX1) + (this._positionY2 - this._positionY1)));
    }
}

export {Rectangle}
