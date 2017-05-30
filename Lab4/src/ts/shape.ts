import {IShape} from "./IShape";

abstract class Shape implements IShape {
    private _fillColor: string;
    private _borderColor: string;

    public abstract CalculateArea(): number;
    public abstract CalculatePerimeter(): number;
    public abstract Draw(ctx: CanvasRenderingContext2D): void;

    public set fillColor(color: string) {
        this._fillColor = (color[0] !== "#") ? "#" + color : color;
    }

    public get fillColor(): string {
        return this._fillColor;
    }

    public set borderColor(color: string) {
        this._borderColor = (color[0] !== "#") ? "#" + color : color;
    }

    public get borderColor(): string {
        return this._borderColor;
    }
}

export {Shape};
