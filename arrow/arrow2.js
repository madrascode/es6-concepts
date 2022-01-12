// example 08#
// Topic: Arrow function with more than 1 parameter

const isBigger = (a, b) => a > b
console.log('Is 2 bigger than 3?', isBigger(2, 3))

// ES5
function isBiggerEs5(a,b){
    return a>b
}
console.log(isBiggerEs5(2,3))


// How would you write this with the least amount of characters
function Add22andReturn(num) {
  let sum = 0
  sum = num + 22
  return sum
}
const add22andReturn = num => num + 22

const addxonArray = num => [1,2,3,4,5].map(x=> x + num)
console.log(add22andReturn(1))
console.log(addxonArray(22))