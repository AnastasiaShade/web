var canvas = document.getElementById("canvas"),
	ctx = canvas.getContext('2d');	

var startTime = performance.now();
var xMin = -1.7433419072;
var xMax = -1.74334190346;
var yMin = 0.00009076687;
var yMax = 0.00009077061;
var width = 800;
var height = 800;
var iterations = 1000;
var escapeRadius = 4;

var Cr_step = (xMax - xMin) / width;
var Ci_step = (yMax - yMin) / height;

var pixels = ctx.createImageData(width, height);
var stepCoeff = 3;

var slaveArea = ctx.createImageData(width, height / 3);

var slaveOne = new Worker("slave1.js");
var slaveTwo = new Worker("slave2.js");
var slaveThree = new Worker("slave3.js");

// Считает низ
slaveOne.postMessage([slaveArea, xMin, yMin, Cr_step, Ci_step]);
slaveOne.onmessage = function(e) {	
	ctx.putImageData(e.data, 0, height - height / 3);
}


// Середина
slaveTwo.postMessage([slaveArea, xMin, yMin, Cr_step, Ci_step]);
slaveTwo.onmessage = function(e) {	
	ctx.putImageData(e.data, 0, height / 3 + 1);
	
var timeTaken = performance.now() - startTime;
alert(timeTaken);
}

for (var y = 0; y < height / 3; y++)
{
	for (var x = 0; x < width; x++)
	{		
		var i = y * width + x + stepCoeff;
		var Cr = xMin + Cr_step * x;
		var Ci = yMin + Ci_step * y;

		var Zr = 0;
		var Zi = 0;
		var Tr = 0;
		var Ti = 0;		
		var n = 0;

		for (; n < iterations && (Tr + Ti) <= escapeRadius; ++n)
		{
			Zi = 2 * Zr * Zi + Ci;
			Zr = Tr - Ti + Cr;
			Tr = Zr * Zr;
			Ti = Zi * Zi;
		}

		pixels.data[i] = 255;		
		if(n !== iterations)
		{
			pixels.data[i-1] = Math.round(255 * n / iterations);
		}

		stepCoeff += 3;
	}
}
ctx.putImageData(pixels, 0, 0); 
