var summation = function (num) {
  // Code here
  let element = 0;
  for (let index = 1; index < num + 1; index++) {
    element += index;
  }
  return element;
};

console.log(summation(4));
