var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d");

// Draw and fill the rectangle

context.fillRect(40,40,100,100);  // x,y,width,height

// Draw the outline of the rectangle

context.strokeRect(40,160,100,100);  // takes the same parameter as fillRect

// Now lets create some rectangle dynamically

var x = 40, y = 280, w = 50, h = 50;

for(var i = 0; i < 10; i++) {
   context.strokeRect(x,y,w,h);
   x += w;
}
