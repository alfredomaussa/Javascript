[https://twitter.com/adarsh____gupta/status/1525372715838107648?s=20&t=QLCmMSRf7BM2-iZ4_HHwIQ](https://twitter.com/adarsh____gupta/status/1525372715838107648?s=20&t=QLCmMSRf7BM2-iZ4_HHwIQ)


``` javascript
function myFunction(a, b) {
  return a * b;
}
```
``` javascript
const x = function (a, b) {return a * b};
```
``` javascript
const myFunction = new Function("a", "b", "return a * b");

let x = myFunction(4, 3);
```

## Function Hoisting
Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

🚩 Functions defined using an expression are not hoisted.

🦝 Self-invoking functions

``` javascript
function myFunction(a, b) {
  return arguments.length;
}
```
``` javascript
// ES5
// this is the object where is called
var x = function(x, y) {
  return x * y;
}

// ES6
// this is global
// Not hoisted
const x = (x, y) => x * y;
```
🚩 When a function is called without an owner object, the value of this becomes the global object.

🦝 myFunction() and window.myFunction() is the same function:


In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

# functions as constructor
``` javascript
// This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}

// This creates a new object
const myObj = new myFunction("John", "Doe");

// This will return "John"
myObj.firstName;
```

🚩 The this keyword in the constructor does not have a value.
The value of this will be the new object created when the function is invoked.

# Call
With the call() method, you can write a method that can be used on different objects.

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

``` javascript
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);
```
Call a method from other object (person) using a third object (person1) as input

If missing entries:
``` javascript
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.call(person1, "Oslo", "Norway");

// or with apply, use a list
person.fullName.apply(person1, ["Oslo", "Norway"]);
// or borrow the function
let fullName = person.fullName.bind(member);
fullName()
```

``` javascript
// 'this' crash
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

setTimeout(person.display, 3000);
// 'this' works
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

let display = person.display.bind(person);
setTimeout(display, 3000);
```

# Closures
``` javascript
// nested functions
function add() {
  let counter = 0;
  function plus() {counter += 1;}
  plus();   
  return counter;
}
// closures 
function add() {
  let counter = 0;
  function plus() {counter += 1;}
  plus();   
  return counter;
}
```
Preactically, when a functions is inside another it save the 'above' scope. but that scope is not global, only works for the parent function.

# Hoisted
Hoisting is JavaScript's default behavior of moving declarations to the top.
🚩 JavaScript Initializations are Not Hoisted
var,let, and const are hoisted to the top of the block, but not initialized.
