var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

console.log(ctx);

ctx.beginPath();
ctx.moveTo(5, 10);
ctx.lineTo(30, 20);
ctx.stroke();
ctx.lineTo(50, 10);
ctx.stroke();

var isDrawing = false;

var canvasGeo=canvas.getBoundingClientRect();
offsetX=canvasGeo.left;
offsetY=canvasGeo.top;

canvas.addEventListener("mousedown", function (event) {
  // Aquí va el código para comenzar a dibujar en el canvas
  console.log("mousedown");
  console.log(event.clientX, event.clientY);
  isDrawing = true;
  if (isDrawing) {
    ctx.beginPath();
    ctx.moveTo(event.clientX-offsetX, event.clientY-offsetY);
  }
});

canvas.addEventListener("mousemove", function (event) {
  // Aquí va el código para comenzar a dibujar en el canvas
  console.log("mousemove");
  console.log(event.clientX, event.clientY);
  if (isDrawing) {
    ctx.lineTo(event.clientX-offsetX, event.clientY-offsetY);
    ctx.stroke();
  }
});

canvas.addEventListener("mouseup", function (event) {
  // Aquí va el código para comenzar a dibujar en el canvas
  console.log("mouseup");
  isDrawing = false;

  ctx.lineTo(event.clientX-offsetX, event.clientY-offsetY);
  ctx.stroke();
});
