const CANVAS_WIDTH: number = 800;
const CANVAS_HEIGHT: number = 600;

import {Circle} from "./circle";
import {Rectangle} from "./rectangle";
import {Shape} from "./shape";
import {Triangle} from "./triangle";

window.onload = (): void => {
    let shapeType: HTMLInputElement = <HTMLInputElement> document.getElementById("shape-type");
    let circle: HTMLElement = document.getElementById("circle");
    let triangle: HTMLElement = document.getElementById("triangle");
    let rectangle: HTMLElement = document.getElementById("rectangle");
    shapeType.onclick = (): void => ChangeSettings();

    function ChangeSettings(): any {
        switch (shapeType.value) {
            case "circle" :
                circle.classList.remove("not-visible");
                triangle.classList.add("not-visible");
                rectangle.classList.add("not-visible");
                break;
            case "triangle" :
                circle.classList.add("not-visible");
                triangle.classList.remove("not-visible");
                rectangle.classList.add("not-visible");
                break;
            case "rectangle" :
                circle.classList.add("not-visible");
                triangle.classList.add("not-visible");
                rectangle.classList.remove("not-visible");
                break;
            default :
                break;
        }
    }

    let shapeForm: HTMLInputElement = <HTMLInputElement> document.getElementById("form");
    shapeForm.onchange = (): void => Draw();

    function Draw(): any {
        let perimeter: HTMLElement = document.getElementById("perimeter");
        let square: HTMLElement = document.getElementById("area");

        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas");
        let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
        canvas.width  = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let shape: Shape;
        switch (shapeType.value) {
            case "circle" :
                shape = new Circle();
                InitCircle(<Circle> shape);
                break;
            case "triangle" :
                shape = new Triangle();
                InitTriangle(<Triangle> shape);
                break;
            case "rectangle" :
                shape = new Rectangle();
                InitRectangle(<Rectangle> shape);
                break;
            default:
                break;
        }
        SetColor(shape);
        shape.Draw(ctx);

        perimeter.innerHTML = "Perimeter is " + shape.CalculatePerimeter();
        square.innerHTML = "Area is " + shape.CalculateArea();
    }

    function SetColor(shape: Shape) {
        let fillColor: string = (<HTMLInputElement> document.getElementById("fill-color")).value;
        let borderColor: string = (<HTMLInputElement> document.getElementById("border-color")).value;

        if (fillColor !== "") { shape.fillColor = fillColor; }
        if (borderColor !== "") { shape.borderColor = borderColor; }
    }

    function InitCircle(shape: Circle) {
        let radius: number = parseFloat((<HTMLInputElement> document.getElementById("radius")).value);
        let centerX: number = parseFloat((<HTMLInputElement> document.getElementById("center-x")).value);
        let centerY: number = parseFloat((<HTMLInputElement> document.getElementById("center-y")).value);

        if (radius) { shape.radius = radius; }
        if (centerX) { shape.positionX = centerX; }
        if (centerY) { shape.positionY = centerY; }
    }

    function InitTriangle(shape: Triangle) {
        let posX1: number = parseFloat((<HTMLInputElement> document.getElementById("triangle-x1")).value);
        let posY1: number = parseFloat((<HTMLInputElement> document.getElementById("triangle-y1")).value);
        let posX2: number = parseFloat((<HTMLInputElement> document.getElementById("triangle-x2")).value);
        let posY2: number = parseFloat((<HTMLInputElement> document.getElementById("triangle-y2")).value);
        let posX3: number = parseFloat((<HTMLInputElement> document.getElementById("triangle-x3")).value);
        let posY3: number = parseFloat((<HTMLInputElement> document.getElementById("triangle-y3")).value);

        if (posX1) { shape.positionX1 = posX1; }
        if (posY1) { shape.positionY1 = posY1; }
        if (posX2) { shape.positionX2 = posX2; }
        if (posY2) { shape.positionY2 = posY2; }
        if (posX3) { shape.positionX3 = posX3; }
        if (posY3) { shape.positionY3 = posY3; }
    }

    function InitRectangle(shape: Rectangle) {
        let posX1 = parseFloat((<HTMLInputElement> document.getElementById("rect-x1")).value);
        let posY1 = parseFloat((<HTMLInputElement> document.getElementById("rect-y1")).value);
        let posX2 = parseFloat((<HTMLInputElement> document.getElementById("rect-x2")).value);
        let posY2 = parseFloat((<HTMLInputElement> document.getElementById("rect-y2")).value);

        if (posX1) { shape.positionX1 = posX1; }
        if (posY1) { shape.positionY1 = posY1; }
        if (posX2) { shape.positionX2 = posX2; }
        if (posY2) { shape.positionY2 = posY2; }
    }
};
