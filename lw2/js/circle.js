var DEFAULT_CIRCLE_RADIUS = 40;
var DEFAULT_CIRCLE_POSITION_X = 50;
var DEFAULT_CIRCLE_POSITION_Y = 50;
var CIRCLE_LINE_WIDTH = 5;

function Circle()
{
    Shape.apply(this, arguments);
    this.radius = DEFAULT_CIRCLE_RADIUS;
    this.positionX = DEFAULT_CIRCLE_POSITION_X;
    this.positionY = DEFAULT_CIRCLE_POSITION_Y;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.setRadius = function(radius)
{
    this.radius = radius;
};

Circle.prototype.setPositionX = function(x)
{
    this.positionX = x;
};

Circle.prototype.setPositionY = function(y)
{
    this.positionY = y;
};

Circle.prototype.draw = function(ctx)
{
    ctx.beginPath();
    ctx.arc(this.positionX, this.positionY, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.getFillColor();
    ctx.fill();
    ctx.lineWidth = CIRCLE_LINE_WIDTH;
    ctx.strokeStyle = this.getBorderColor();
    ctx.stroke();
};

Circle.prototype.calculateArea = function()
{
    return Math.round(Math.PI * this.radius * this.radius);
};

Circle.prototype.calculatePerimeter = function()
{
    return Math.round(2 * Math.PI * this.radius);
};