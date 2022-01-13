// with no parameter
const getNum = () => 2

// ES5 function - with function expression
// we cannot reassign the value to same const variable
// it will result in syntax error

const gotNum  = function(){
    return 2
}

console.log(gotNum())
console.log(getNum())