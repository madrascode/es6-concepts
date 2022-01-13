// with one parameter
// Function
const isOne = (num) => num == 1 // HW: === vs == in JavaScript, write a blog.

const isTwo  = num => num == 2;


// ES5
const isOneES5 =  function(num){
    return num === 1 // num == 1? true: false (ternary operator)
}

console.log(isOneES5(1))


const isSample = function(num){
    let x;
    num === 5 ?  x = 100 : x = 1000
    return x
}
console.log(isSample(5))
console.log(isTwo(2))