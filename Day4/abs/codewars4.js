// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

function sumArray(array) {
  console.log(array);
  array = array || [0];
  let result = array.reduce((a, b) => a + b, 0);
  if (array.length > 1) {
    result -= Math.max(...array);
    result -= Math.min(...array);
  } else {
    result = 0;
  }
  console.log(result);
  return result;
}

a = [1, 2, 3];

console.log(sumArray([3]));
