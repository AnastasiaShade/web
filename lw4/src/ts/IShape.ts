interface IShape {
    CalculateArea(): number;
    CalculatePerimeter(): number;
    Draw(ctx: CanvasRenderingContext2D): void;
}

export {IShape};
