var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d");

// Lets draw the circle
context.beginPath();  // start the path
context.arc(230,90,50,0,Math.PI*2,false); // Draw the circle
context.closePath();
context.fill(); // fill the path

// Circle parameters
// context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
// NOTE: the angles are in radians and not degrees

// Lets draw some arc

context.moveTo(300,20);		// create a starting point
context.lineTo(400,20);		// create a horizontal line
context.arcTo(450,20,450,90,20); // create an arc to the right of the line
context.lineTo(450,120);	// continue a vertical line
context.stroke();


