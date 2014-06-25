var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d");

// Draw lines
context.beginPath();  // start the path
context.moveTo(40,40);	// set  the path origin
context.lineTo(340,40); // set the path destination
context.closePath();	// close the path
context.stroke();	// Outline the path

// Lets draw a vertical line
context.beginPath();
context.moveTo(40,40);
context.lineTo(40,200);
context.closePath();
context.stroke();

document.getElementById('btnClear').addEventListener('click', function() {
	context.clearRect(0,0,canvas.width, canvas.height);
}, false);



