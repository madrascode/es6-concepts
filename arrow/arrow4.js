const giveMeAnObject = (a) => {

console.log(`type of a value ${typeof(a.a)}`)

console.log(a.a)

   return ({ ...a , b: 10 })
}

// console.log(giveMeAnObject({a: 5}))

let returnValue = giveMeAnObject({a: 5})
console.log(returnValue)
console.log(typeof(returnValue))
console.log(returnValue.a, returnValue.b)
console.log(typeof(returnValue.a),typeof(returnValue.b))
// while returning obj in arrow function we cannot define it normally
// we need to enclose it in () bracket


const returnObject = a => ({value: a})
console.log(returnObject(5)) 