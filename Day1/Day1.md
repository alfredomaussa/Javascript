[JavaScript is an enormous language but you don't need to learn everything in the beginning... Twitter:@Prathkum](https://twitter.com/Prathkum/status/1525186388005617664?s=20&t=PX1ZXDSiqStSP4hb9KRTLQ)
[What can do javascript?](https://www.w3schools.com/js/js_intro.asp)

## Posible requirements
* HTML
* CSS

## Basic concepts
- Data types in JavaScript
- Variables
- Statements
- Control statements
- Operators
- And other basic stuff...

## intermediate concepts
- Arrays and their methods
- Objects
- Functions
- Arrow function

### Advanced concetpts
- Async/await
- callbacks, promises, etc...

More...
- Hoisting
- Closures
- Callbacks
- Promises
- Async & Await
- Currying
- And other ES6 feature

# What can do javascript?
JavaScript Can Change HTML Content
``` javascript
document.getElementById("demo").innerHTML = "Hello JavaScript";
```
JavaScript Can Change HTML Attribute Values
``` javascript

```
JavaScript Can Change HTML Styles (CSS)
``` javascript
document.getElementById("demo").style.fontSize = "35px";
```
JavaScript Can Hide HTML Elements
``` javascript
document.getElementById("demo").style.display = "none";
```
JavaScript Can Show HTML Elements
``` javascript
document.getElementById("demo").style.display = "block";
```
# Content
* DOM
* Event loops

# DOM (Document Object Model)
Elements are tags of HTML. (div, h1, body, head...)
* Add/modify/delete HTML elements
* Change attributes, styles... of elements

[Todo, add examples using javascript]
### Find especifics elements
- getElementsByTagName()
- getElementsById()
- getElementsByClassName()
### Change elements
- element.innerHTML
- element.attribute
- element .style.property
- element.setAttribute(attr, value)

### Add/delete elements
- document.createElement(element)
- document.removeChild(element)
- document.appendChild(element)

# Event loops

# Main [Introduction to JavaScript ☕](https://twitter.com/Prathkum/status/1396103815879929856?s=20&t=PX1ZXDSiqStSP4hb9KRTLQ)
📌 JavaScript is a single threaded language
[Other tweet: JavaScript is a single-threaded language then how does async work? 🚀 - @Anni_Maan](https://twitter.com/Anni_Maan/status/1524980667716706304?s=20&t=YGZ6I-FTLzrhMV7EhRvEHA)
1. Print statement
2. Data types and variables
3. Basic operators
4. Logical operators
5. Comparisons
6. Loops and statements
7. alert() 
8. prompt()
9.  Arrays
10. Objects
11. Functions
12. Arrow function
13. Array methods
14. Hoisting
15. Closures
16. Callbacks
17. Promises
18. Async & Await
19. Currying
20. And other ES6 feature
# Addition resources
  * [Introduction to JavaScript ☕](https://twitter.com/Prathkum/status/1396103815879929856?s=20&t=jawWiazyO88hQOE8cSsjEg)
  * [Introduction to Event Loop ➰](https://twitter.com/Prathkum/status/1401192242937798660?s=20&t=PLCKujhPtZbN7w0phmUdMw)
  * [40 JavaScript Projects for Beginners – Easy Ideas to Get Started Coding JS](https://www.freecodecamp.org/news/javascript-projects-for-beginners/)
  * [Top 10 Github Repositories to Learn JavaScript](https://twitter.com/Eng_khairallah1/status/1525195005438091264?s=20&t=D8rEWTPFjwpZCE8bOTtNog)

---
# Objects
[Source: JavaScript Objects](https://www.w3schools.com/js/js_object_definition.asp)

* Booleans can be objects (if defined with the new keyword)
* Numbers can be objects (if defined with the new keyword)
* Strings can be objects (if defined with the new keyword)
* Dates are always objects
* Maths are always objects
* Regular expressions are always objects
* Arrays are always objects
* Functions are always objects
* Objects are always objects

## JavaScript Primitives
You can't add properties or methods to a primitive value.
Examples of primitive types:
* string
* number
* boolean
* null
* undefined
* symbol
* bigint

## Objects
Single value:
``` javascript
let person = "John Doe";
```
Multiple values:
``` javascript
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```