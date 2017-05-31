onmessage = function(e) {
console.log('Message received from main script');
var workerResult = e.data[0];

	var xMin = e.data[1];
	var yMin = e.data[2];
	var Cr_step = e.data[3];
	var Ci_step = e.data[4];
	var iterations = 1000;
	var escapeRadius = 4;
	var stepCoeff = 3;
	var width = 800;
	var height = 800;
	
  for (var y = 0; y < height / 3; y++)
  {
	  for (var x = 0; x < width; x++)
	  {		
			var fool = y + height / 3;
		  var i = y * width + x + stepCoeff;
		  var Cr = xMin + Cr_step * x;
		  var Ci = yMin + Ci_step * fool;

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
		
		  workerResult.data[i] = 255;		
		  if(n !== iterations)
		  {
			  workerResult.data[i - 3] = Math.round(255 * n / iterations);
		  }
		
		  stepCoeff += 3;
	  }
	}
	
  console.log('Posting message back to main script');
  postMessage(workerResult);
}