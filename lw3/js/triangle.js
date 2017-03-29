var DEFAULT_TRIANGLE_POSITION_X1 = 30;
var DEFAULT_TRIANGLE_POSITION_Y1 = 30;
var DEFAULT_TRIANGLE_POSITION_X2 = 100;
var DEFAULT_TRIANGLE_POSITION_Y2 = 50;
var DEFAULT_TRIANGLE_POSITION_X3 = 30;
var DEFAULT_TRIANGLE_POSITION_Y3 = 100;
var TRIANGLE_LINE_WIDTH = 3;
var calculateVectorLength = function(x1, x2, y1, y2)
{
    return Math.round(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));
};

function Triangle()
{
    Shape.apply(this, arguments);
    this.positionX1 = DEFAULT_TRIANGLE_POSITION_X1;
    this.positionY1 = DEFAULT_TRIANGLE_POSITION_Y1;
    this.positionX2 = DEFAULT_TRIANGLE_POSITION_X2;
    this.positionY2 = DEFAULT_TRIANGLE_POSITION_Y2;
    this.positionX3 = DEFAULT_TRIANGLE_POSITION_X3;
    this.positionY3 = DEFAULT_TRIANGLE_POSITION_Y3;
}

Triangle.prototype = Object.create(Shape.prototype);

Triangle.prototype.setPositionX1 = function(x1)
{
    this.positionX1 = x1;
};

Triangle.prototype.setPositionY1 = function(y1)
{
    this.positionY1 = y1;
};

Triangle.prototype.setPositionX2 = function(x2)
{
    this.positionX2 = x2;
};

Triangle.prototype.setPositionY2 = function(y2)
{
    this.positionY2 = y2;
};

Triangle.prototype.setPositionX3 = function(x3)
{
    this.positionX3 = x3;
};

Triangle.prototype.setPositionY3 = function(y3)
{
    this.positionY3 = y3;
};

Triangle.prototype.draw = function(ctx)
{
    ctx.beginPath();
    ctx.moveTo(this.positionX1, this.positionY1);
    ctx.lineTo(this.positionX2, this.positionY2);
    ctx.lineTo(this.positionX3, this.positionY3);
    ctx.lineTo(this.positionX1, this.positionY1);
    ctx.fillStyle = this.getFillColor();
    ctx.fill();
    ctx.lineWidth = TRIANGLE_LINE_WIDTH;
    ctx.strokeStyle = this.getBorderColor();
    ctx.stroke();
};

Triangle.prototype.calculateArea = function()
{
    return Math.abs(((this.positionX1 - this.positionX3) * (this.positionY2 - this.positionY3) -
        (this.positionX2 - this.positionX3) * (this.positionY1 - this.positionY3)) / 2);
};

Triangle.prototype.calculatePerimeter = function()
{
    var vector1Length = calculateVectorLength(this.positionX1, this.positionX2, this.positionY1, this.positionY2);
    var vector2Length = calculateVectorLength(this.positionX2, this.positionX3, this.positionY2, this.positionY3);
    var vector3Length = calculateVectorLength(this.positionX1, this.positionX3, this.positionY1, this.positionY3);
    return (vector1Length + vector2Length + vector3Length);
};