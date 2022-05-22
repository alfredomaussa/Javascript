Source: [Learning JavaScript can be hard unless you have a good foundation](https://twitter.com/ShowwcaseHQ/status/1524770680201433093?s=20&t=SwBb4_8Yi-OdR73UzlhZOQ)
➝ Variables
➝ Functions
➝ Data Types
➝ Objects
➝ Callbacks
➝ Loops
➝ Closures
➝ Arrays

# Data types
* Strings
* Numbers
* Booleans
* Arrays
* Objects
* undefined

## Scopes
* Block scope
* Function scope
* Global scope

``` javascript
// This is a block scope
{
  let x = 2;
}
// x can NOT be used here
{
  var x = 2;
}
// x CAN be used here
```
🦝 If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

``` javascript
myFunction();
// code here can use carName as a global variable
document.getElementById("demo").innerHTML = "I can display " + carName;

function myFunction() {
  carName = "Volvo";
}
// optional
// var carName;
```
``` javascript
myFunction();
// code here can use carName as a global variable
document.getElementById("demo").innerHTML = "I can display " + carName;

function myFunction() {
  var carName = "Volvo";
    //   local scope, carName won't exist outside
}
// optional
// var carName;
```

Before 2015
* Var

Var keeps the variable in the run-time, even if it gets out the initial scope.

After 2015
* Let
* const

let only works in the scope leve it was declarated, 'let' block the access to redeclare that variable in the same scope, var do not.

## one statement multiple variables.
``` javascript
let person = "John Doe",
carName = "Volvo",
price = 200;
```

* Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():

🚩 Always use 'default' in switch
🚩 switch works with stric comparisson
``` javascript
'10'==10 // true
'10'===10 // false
```
``` javascript
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

console.log("Is there anything else you'd like?");

```

🚩 Addition is about adding numbers.
🚩 Concatenation is about adding strings.
``` javascript
10+5 // 15
'10'+5 // '105'
```

### Multiline code
``` javascript
let x =
"Hello World!";
```
``` javascript
// crash
let x = "Hello
World!";
```
``` javascript
let x = "Hello \
World!";
```
``` javascript
let
power = 10; 
```
🚩 Never break a return statement 

Legal:
``` javascript
person = {firstName:"John", lastName:"Doe", age:46,}
```
``` javascript
points = [40, 100, 1, 5, 25, 10,];
```
🚩 Internet Explorer 8 will crash.

## undefined and null, are not the same
You should test first undefined and then null.
``` javascript
if (typeof myObj !== "undefined" && myObj !== null) 
```

## Arrow function, this
select 'this' where it was declared, remember arrow functions doesn't have 'this' of their own.
``` javascript
// Arrow Function, declared in window object:
hello = () => {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);
// this->window
// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);
// this->window
```

``` javascript
// Regular Function:
hello = function() {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);
// this->window
// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);
// this->btn
```

Other:
[The Difference Between Regular Functions and Arrow Functions](https://twitter.com/deetwts/status/1525020208204611584?s=20&t=MV2KKUlNKigQFZYq15MAIA)
# Favorites shorthand snippets
Credits: [25+ JavaScript Shorthand Coding Techniques](https://www.sitepoint.com/shorthand-javascript-techniques/)
```javascript
const answer = x > 10 ? "greater than 10" : "less than 10";
```
```javascript
if (variable1 !== null || variable1 !== undefined || variable1 !== '') {
     let variable2 = variable1;
}
// 
const variable2 = variable1  || 'new';
```
```javascript
const fruits = ['mango', 'peach', 'banana'];
for (let i = 0; i < fruits.length; i++)
// 
for (let fruit of fruits)
// 
[2, 5, 9].forEach(logArrayElements);
```
```javascript
function volume(l, w, h) {
  if (w === undefined)
    w = 3;
  if (h === undefined)
    h = 4;
  return l * w * h;
}
// 
volume = (l, w = 3, h = 4 ) => (l * w * h);
```
```javascript
const welcome = `You have logged in as ${first} ${last}`;

const db = `http://${host}:${port}/${database}`;
```
```javascript
// joining arrays
const odd = [1, 3, 5];
const nums = [2 ,4 , 6].concat(odd);
// 
// joining arrays
const odd = [1, 3, 5];
const nums = [2 ,4 , 6].concat(odd);
// joining arrays
const odd = [1, 3, 5];
const nums = [2 ,4 , 6].concat(odd);
// 
const arr = [1, 2, 3, 4];
const arr2 = [...arr];
```
```javascript
const pets = [
  { type: 'Dog', name: 'Max'},
  { type: 'Cat', name: 'Karl'},
  { type: 'Dog', name: 'Tommy'},
]

function findDog(name) {
  for(let i = 0; i<pets.length; ++i) {
    if(pets[i].type === 'Dog' && pets[i].name === name) {
      return pets[i];
    }
  }
}
// 
const pets = [
  { type: 'Dog', name: 'Max'},
  { type: 'Cat', name: 'Karl'},
  { type: 'Dog', name: 'Tommy'},
]

function findDog(name) {
  for(let i = 0; i<pets.length; ++i) {
    if(pets[i].type === 'Dog' && pets[i].name === name) {
      return pets[i];
    }
  }
}
```

``` javascript
let fname = { firstName : 'Black' };
let lname = { lastName : 'Panther'}
let full_names = Object.assign(fname, lname);
// 
let full_names = Object.assign(fname, lname);
```