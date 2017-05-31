const DEFAULT_TRIANGLE_POSITION_X1: number = 30;
const DEFAULT_TRIANGLE_POSITION_Y1: number = 30;
const DEFAULT_TRIANGLE_POSITION_X2: number = 100;
const DEFAULT_TRIANGLE_POSITION_Y2: number = 50;
const DEFAULT_TRIANGLE_POSITION_X3: number = 30;
const DEFAULT_TRIANGLE_POSITION_Y3: number = 100;
const TRIANGLE_LINE_WIDTH: number = 3;
const DEFAULT_TRIANGLE_FILL_COLOR: string = "#f00";
const DEFAULT_TRIANGLE_BORDER_COLOR: string = "#000";

import {Shape} from "./shape";

class Triangle extends Shape {
    private static CalculateVectorLength(x1: number, x2: number, y1: number, y2: number): number {
        return Math.round(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));
    }

    private _positionX1: number;
    private _positionY1: number;
    private _positionX2: number;
    private _positionY2: number;
    private _positionX3: number;
    private _positionY3: number;

    constructor() {
        super();
        this.fillColor = DEFAULT_TRIANGLE_FILL_COLOR;
        this.borderColor = DEFAULT_TRIANGLE_BORDER_COLOR;
        this._positionX1 = DEFAULT_TRIANGLE_POSITION_X1;
        this._positionY1 = DEFAULT_TRIANGLE_POSITION_Y1;
        this._positionX2 = DEFAULT_TRIANGLE_POSITION_X2;
        this._positionY2 = DEFAULT_TRIANGLE_POSITION_Y2;
        this._positionX3 = DEFAULT_TRIANGLE_POSITION_X3;
        this._positionY3 = DEFAULT_TRIANGLE_POSITION_Y3;
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

    public set positionX3(x3: number) {
        this._positionX3 = x3;
    }

    public get positionX3(): number {
        return this._positionX3;
    }

    public set positionY3(y3: number) {
        this._positionY3 = y3;
    }

    public get positionY3() {
        return this._positionY3;
    }

    public Draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.moveTo(this._positionX1, this._positionY1);
        ctx.lineTo(this._positionX2, this._positionY2);
        ctx.lineTo(this._positionX3, this._positionY3);
        ctx.lineTo(this._positionX1, this._positionY1);
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.lineWidth = TRIANGLE_LINE_WIDTH;
        ctx.strokeStyle = this.borderColor;
        ctx.stroke();
    }

    public CalculateArea(): number {
        return Math.abs(((this._positionX1 - this._positionX3) * (this._positionY2 - this._positionY3) -
            (this._positionX2 - this._positionX3) * (this._positionY1 - this._positionY3)) / 2);
    }

    public CalculatePerimeter(): number {
        let vector1Length: number = Triangle.CalculateVectorLength(
            this._positionX1,
            this._positionX2,
            this._positionY1,
            this._positionY2);
        let vector2Length: number = Triangle.CalculateVectorLength(
            this._positionX2,
            this._positionX3,
            this._positionY2,
            this._positionY3);
        let vector3Length: number = Triangle.CalculateVectorLength(this._positionX1,
            this._positionX3,
            this._positionY1,
            this._positionY3);
        return (vector1Length + vector2Length + vector3Length);
    }
}

export {Triangle}
