# Comienzo
 el código más básico es:

 ```HTML
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <canvas width="900px", height="600px"></canvas>
</body>
</html>
 ```
aqui solo estamos usando:
```HTML
<canvas width="900px", height="600px"></canvas>
```

## Agregando javascript

ahora el codigo queda así:
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <canvas id="myCanvas" width="900px", height="600px"></canvas>

    <script src="index.js"></script>
</body>
</html>
```
La linea de codigo que agregamos es:
```HTML
<script src="index.js"></script>
```

en el archivo javascript agregamos:
```javascript
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

console.log(ctx);
```

### recurso
En este sitio hay info básica interesante http://html5tutorial.com/how-to-draw-a-point-with-the-canvas-api/

## progreso
```javascript
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

console.log(ctx);

ctx.beginPath();
ctx.moveTo(5, 10);
ctx.lineTo(30, 20);
ctx.stroke();

canvas.addEventListener("mousedown", function (event) {
  // Aquí va el código para comenzar a dibujar en el canvas
  console.log("mousedown");
  console.log(event.clientX,event.clientY)
  ctx.beginPath();
ctx.moveTo(event.clientX, event.clientY);
});

canvas.addEventListener("mouseup", function (event) {
  // Aquí va el código para comenzar a dibujar en el canvas
  console.log("mouseup");
  ctx.lineTo(event.clientX, event.clientY);
ctx.stroke();
});

```

Voy a agregar mousemove:
```javascript
canvas.addEventListener("mousemove", function (event) {
    // Aquí va el código para comenzar a dibujar en el canvas
    console.log("mousemove");
    console.log(event.clientX,event.clientY)
    // ctx.beginPath();
//   ctx.moveTo(event.clientX, event.clientY);
  });
```
Ejecuta el evento aunque no haga clic.

# termine

```javascript
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

canvas.addEventListener("mousedown", function (event) {
  // Aquí va el código para comenzar a dibujar en el canvas
  console.log("mousedown");
  console.log(event.clientX, event.clientY);
  isDrawing = true;
  if (isDrawing) {
    ctx.beginPath();
    ctx.moveTo(event.clientX, event.clientY);
  }
});

canvas.addEventListener("mousemove", function (event) {
  // Aquí va el código para comenzar a dibujar en el canvas
  console.log("mousemove");
  console.log(event.clientX, event.clientY);
  if (isDrawing) {
    ctx.lineTo(event.clientX, event.clientY);
    ctx.stroke();
  }
});

canvas.addEventListener("mouseup", function (event) {
  // Aquí va el código para comenzar a dibujar en el canvas
  console.log("mouseup");
  isDrawing = false;

  ctx.lineTo(event.clientX, event.clientY);
  ctx.stroke();
});

```
Bueno, me hizo falta quitarle el offset de la ubicación del canvas:
```javascript
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

```
