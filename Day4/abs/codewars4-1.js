// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

function sumArray(array) {
  array.sort();
  return array.splice(1,2).reduce((a,b)=>a+b,0)
}

a = [5,1, 2, 3];

console.log(sumArray(a));
