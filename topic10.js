
// locate the canvas element
var canvas = document.getElementById("myCanvas");
// create a drawing object
// getContext() is a built in html object with methods and properties
// for drawing
var ctx = canvas.getContext("2d");
// begins path
ctx.beginPath();
// determines the size of the circle
ctx.arc(95,50,40,0,2*Math.PI);
//changes the color of the line
ctx.strokeStyle = 'pink';
// a line to appear in canvas
ctx.stroke();

// locate the canvas element
var canvas2 = document.getElementById("myCanvas2");
// create a drawing object
// getContext() is a built in html object with methods and properties
// for drawing
var ctx = canvas2.getContext("2d");
// the fillStyle property fills in the object
// can be a color, gradient or pattern
ctx.fillStyle = "#FF0000";
// fillRect(x, y, width, height) draws a rectangle filled with the 
// fillStyle
ctx.fillRect(50, 50, 100, 100);

var canvas3 = document.getElementById("myCanvas3");
var ctx=canvas3.getContext("2d");
ctx.font="30px Comic Sans MS";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText("Check out my text!", canvas3.width/2, canvas3.height/2);