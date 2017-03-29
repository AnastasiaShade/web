var DEFAULT_RECTANGLE_POSITION_X1 = 30;
var DEFAULT_RECTANGLE_POSITION_Y1 = 30;
var DEFAULT_RECTANGLE_POSITION_X2 = 100;
var DEFAULT_RECTANGLE_POSITION_Y2 = 100;
var RECTANGLE_LINE_WIDTH = 8;

function Rectangle()
{
    Shape.apply(this, arguments);
    this.positionX1 = DEFAULT_RECTANGLE_POSITION_X1;
    this.positionY1 = DEFAULT_RECTANGLE_POSITION_Y1;
    this.positionX2 = DEFAULT_RECTANGLE_POSITION_X2;
    this.positionY2 = DEFAULT_RECTANGLE_POSITION_Y2;
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.setPositionX1 = function(x1)
{
    this.positionX1 = x1;
};

Rectangle.prototype.setPositionY1 = function(y1)
{
    this.positionY1 = y1;
};

Rectangle.prototype.setPositionX2 = function(x2)
{
    this.positionX2 = x2;
};

Rectangle.prototype.setPositionY2 = function(y2)
{
    this.positionY2 = y2;
};

Rectangle.prototype.draw = function(ctx)
{
    ctx.beginPath();
    ctx.fillStyle = this.getFillColor();
    ctx.strokeStyle = this.getBorderColor();
    ctx.lineWidth = RECTANGLE_LINE_WIDTH;
    ctx.fillRect(this.positionX1, this.positionY1, this.positionX2 - this.positionX1, this.positionY2 - this.positionY1);
    ctx.strokeRect(this.positionX1, this.positionY1, this.positionX2 - this.positionX1, this.positionY2 - this.positionY1);
};

Rectangle.prototype.calculateArea = function()
{
    return Math.abs((this.positionX2 - this.positionX1) * (this.positionY2 - this.positionY1));
};

Rectangle.prototype.calculatePerimeter = function()
{
    return Math.abs(2 * ((this.positionX2 - this.positionX1) + (this.positionY2 - this.positionY1)));
};