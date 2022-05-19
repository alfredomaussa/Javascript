https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

// Complete the solution so that it reverses the string passed into it.

function solution(str) {
    out=[];
    for (let i = str.length-1; i >= 0; i--) {
        const element = str[i];
        console.log(element);
        out.push(element)
    }
    return out.join("")
    }   

console.log(solution("asd"));

//  clever

function solution(str){
    return str.split('').reverse().join('');  
}

