var summation = function (num) {
  // Code here
  let element;
  for (let index = 0; index < num; index++) {
    element += index;
  }
  return element;
}

console.log(summation(4));
