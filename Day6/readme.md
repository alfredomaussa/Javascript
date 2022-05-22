# Day 6
stackerd:

* [🔥 MEJORES SITIOS WEB PARA APRENDER JAVASCRIPT (GRATIS) 😮](https://twitter.com/alexanyernas/status/1526586155633979393)


* [React developers are in high demand both in WEB2 and WEB3 🚀
FREE resources to learn React👇](https://twitter.com/Anni_Maan/status/1526424781624582144?s=20&t=UqWjOdQ0FKSRXeS6HAJkvQ)

# Callbacks
Are functions that are called/triggered on a event, practically are functions pointer passed as parameter/input on another function.

``` javascript
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
```

``` javascript
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status == 200) {
      myCallback(this.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  }
  req.send();
}

getFile(myDisplayer);
```

# Promises
## Producing
``` javascript
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});
```
## Consuming
Promise.then() takes two arguments, a callback for success and another for failure.
``` javascript
// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```

``` javascript
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(asd, myReject) {
  let x = 0;

// some code (try to change x to 5)

  if (x == 0) {
  	setTimeout(function() { asd("OK"); }, 3000);
    
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
```

## Async/await
``` javascript
async function myFunction() {
  return "Hello";
}
```
``` javascript
function myFunction() {
  return Promise.resolve("Hello");
}
```

# Fetch vs HTTPrequest
## Fetch
``` javascript
// With Async
async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  myDisplay(myText);
}

// With promise
fetch(file)
.then(myObject => myObject.text())
.then(myText => myDisplay(myText));

```
## HTTPrequest
1. An event occurs in a web page (the page is loaded, a button is clicked)
2. An XMLHttpRequest object is created by JavaScript
3. The XMLHttpRequest object sends a request to a web server
4. The server processes the request
5. The server sends a response back to the web page
6. The response is read by JavaScript
7. Proper action (like page update) is performed by JavaScript
   
``` javascript
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
    }
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
```

``` javascript
// Create an XMLHttpRequest object
const xhttp = new XMLHttpRequest();

// Define a callback function
xhttp.onload = function() {
  // Here you can use the Data
}

// Send a request
// open(method, url, async)
xhttp.open("GET", "ajax_info.txt");
xhttp.send();
```

# When should I use ?? (nullish coalescing) vs || (logical OR)?
credits: https://stackoverflow.com/a/61481631/13636459

``` javascript
console.log(12 || "not found") // 12
console.log(0  || "not found") // "not found"

console.log("jane" || "not found") // "jane"
console.log(""     || "not found") // "not found"

console.log(true  || "not found") // true
console.log(false || "not found") // "not found"

console.log(undefined || "not found") // "not found"
console.log(null      || "not found") // "not found"
```

``` javascript
console.log(12 ?? "not found") // 12
console.log(0  ?? "not found") // 0

console.log("jane" ?? "not found") // "jane"
console.log(""     ?? "not found") // ""

console.log(true  ?? "not found") // true
console.log(false ?? "not found") // false

console.log(undefined ?? "not found") // "not found"
console.log(null      ?? "not found") // "not found"
```