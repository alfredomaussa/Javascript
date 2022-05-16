// Source:
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
var obj = { a: 5, b: 7, c: 9 };
// option 1
for (var [key, value] of Object.entries(obj)) {
  console.log(key + " " + value); // "a 5", "b 7", "c 9"
}

// option 2
Object.entries(obj).forEach(([key, value]) => {
  console.log(key + " " + value); // "a 5", "b 7", "c 9"
});

// option 3
var map = new Map(Object.entries(obj));
map.forEach(function (value, key) {
    console.log(key + " " + value); // "a 5", "b 7", "c 9"
});

// option 4
Object.keys(obj).forEach(function (key) {
  console.log(key + " " + obj[key]); // "a 5", "b 7", "c 9"
});

// option 5
for (let key in obj) {
  console.log(obj[key]);
  };
