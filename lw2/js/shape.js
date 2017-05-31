var DEFAULT_FILL_COLOR = "#f00";
var DEFAULT_BORDER_COLOR = "#000";

function Shape()
{
    this.fillColor = DEFAULT_FILL_COLOR;
    this.borderColor = DEFAULT_BORDER_COLOR;
}

Shape.prototype.setFillColor = function(fillColor)
{
    this.fillColor = (fillColor[0] != "#") ? "#" + fillColor : fillColor;
};

Shape.prototype.getFillColor = function()
{
    return this.fillColor;
};

Shape.prototype.setBorderColor = function(borderColor)
{
    this.borderColor = (borderColor[0] != "#") ? "#" + borderColor : borderColor;
};

Shape.prototype.getBorderColor = function()
{
    return this.borderColor;
};

Shape.prototype.draw = function()
{

};

Shape.prototype.calculateArea = function()
{

};

Shape.prototype.calculatePerimeter = function()
{

};