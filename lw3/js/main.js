var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 600;

var shapeType = document.getElementById("shape-type");
shapeType.onchange = function()
{
    var circle = document.getElementById("circle");
    var rectangle = document.getElementById("rectangle");
    var triangle = document.getElementById("triangle");
    switch(shapeType.value)
    {
    case "circle":
        circle.style.display = "block";
        rectangle.style.display = "none";
        triangle.style.display = "none";
        break;
    case "rectangle":
        circle.style.display = "none";
        rectangle.style.display = "block";
        triangle.style.display = "none";
        break;
    case "triangle":
        circle.style.display = "none";
        rectangle.style.display = "none";
        triangle.style.display = "block";
        break;
    default:
        break;
    }
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width  = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
var form = document.getElementById("form");
form.onchange = function()
{
    draw();
};

function draw()
{
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    switch(shapeType.value)
    {
    case "circle":
        drawCircle();
        break;
    case "rectangle":
        drawRectangle();
        break;
    case "triangle":
        drawTriangle();
        break;
    default:
        break;
    }
}

function drawCircle()
{
    var circle = new Circle;
    setColor(circle);
    var radius = document.getElementById("radius").value;
    var centerX = document.getElementById("center-x").value;
    var centerY = document.getElementById("center-y").value;
    if (!isEmpty(radius))
    {
        circle.setRadius(radius);
    }
    if (!isEmpty(centerX))
    {
        circle.setPositionX(centerX);
    }
    if (!isEmpty(centerY))
    {
        circle.setPositionY(centerY);
    }
    circle.draw(ctx);
    printPerimeterAndArea(circle);
}

function drawRectangle()
{
    var rectangle = new Rectangle;
    setColor(rectangle);
    var x1 = document.getElementById("rect-x1").value;
    var y1 = document.getElementById("rect-y1").value;
    var x2 = document.getElementById("rect-x2").value;
    var y2 = document.getElementById("rect-y2").value;
    if (!isEmpty(x1))
    {
        rectangle.setPositionX1(x1);
    }
    if (!isEmpty(y1))
    {
        rectangle.setPositionY1(y1);
    }
    if (!isEmpty(x2))
    {
        rectangle.setPositionX2(x2);
    }
    if (!isEmpty(y2))
    {
        rectangle.setPositionY2(y2);
    }
    rectangle.draw(ctx);
    printPerimeterAndArea(rectangle);
}

function drawTriangle()
{
    var triangle = new Triangle;
    setColor(triangle);
    var x1 = document.getElementById("triangle-x1").value;
    var y1 = document.getElementById("triangle-y1").value;
    var x2 = document.getElementById("triangle-x2").value;
    var y2 = document.getElementById("triangle-y2").value;
    var x3 = document.getElementById("triangle-x3").value;
    var y3 = document.getElementById("triangle-y3").value;
    if (!isEmpty(x1))
    {
        triangle.setPositionX1(x1);
    }
    if (!isEmpty(y1))
    {
        triangle.setPositionY1(y1);
    }
    if (!isEmpty(x2))
    {
        triangle.setPositionX2(x2);
    }
    if (!isEmpty(y2))
    {
        triangle.setPositionY2(y2);
    }
    if (!isEmpty(x3))
    {
        triangle.setPositionX3(x3);
    }
    if (!isEmpty(y3))
    {
        triangle.setPositionY3(y3);
    }
    triangle.draw(ctx);
    printPerimeterAndArea(triangle);
}

function setColor(shape)
{
    var fillColor = document.getElementById("fill-color").value;
    var borderColor = document.getElementById("border-color").value;
    if (!isEmpty(fillColor))
    {
        shape.setFillColor(fillColor);
    }
    if (!isEmpty(borderColor))
    {
        shape.setBorderColor(borderColor);
    }
}

function printPerimeterAndArea(shape)
{
    document.getElementById("perimeter").innerHTML = "Perimeter is " + shape.calculatePerimeter();
    document.getElementById("area").innerHTML = "Area is " + shape.calculateArea();
}

function isEmpty(value)
{
    return value === "";
}