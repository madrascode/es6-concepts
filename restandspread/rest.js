// rest operator example

function printSomething(...rest) {
  // rest - type is object
  console.log('i am only rest',rest, typeof(rest))
  // ...rest - type is also object
  console.log('i am only ...rest',...rest, typeof([...rest]))

  // rest is iterable like array
  console.log(rest.map(n=>n*2))
  
  // destructuring of rest
  const [a, b, c] = [...rest]
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
  
  // arguments - array like objects
  // in older days instead of rest argument object was used to capture the parameters

  console.log('arguments',arguments)
  console.log('arguments-length',arguments.length)
  console.log('arg is an object', arguments[0])

  // arguments is not iterable 
  // console.log(arguments.map(n=>n*2))
  // it always store all arguments value passed to it 
  // we cannot capture args partially like rest operator


  // arguments does not supports arrow function
  // arrow function does not have "this" variable

  const arrowCall = ()=>{
    console.log(arguments.length)
  }
  arrowCall()

}

printSomething(1,2,3,4,5,6,7,8)

const arrowCall = ()=>{
  console.log('outside',arguments.length)
}
arrowCall(1,23)