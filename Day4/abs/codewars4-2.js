// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

function sumArray(array) {
    const arr= array?.sort((a,b)=>a-b).splice(1,array.length-2) || [];
    return arr.reduce((acc,cur)=>acc+cur,0);
}

a = [3,1, 2,5];

console.log(sumArray(a));
