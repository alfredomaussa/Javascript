# Objects
[Source: JavaScript Objects](https://www.w3schools.com/js/js_object_definition.asp)

## Description
Objects are the way to abstract standalone data with hierachy. They are templates of a platonic idea.

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

## Examples
Single value:
``` javascript
let person = "John Doe";
```
Multiple values:
``` javascript
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```

# Properties and methods
Related to values and functions:
## Properties
``` javascript
let person = {
    "name":"John",
    "age":30
}

person.name
>> John
person["name"]
>> John
// Expression
tag="name"
person[tag]
// Wrong: person.tag
```

# Dogs data
[Source](https://dog.ceo/dog-api/)
