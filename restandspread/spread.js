// spread is a operator for expansion of 
// iterables like (array, string) into list of arguments
// [...spread] used in function invocation 


const spreadExample = ({ a, b }) => {
    console.log(a, b)
  }  

  const obj = { a: 1, b: 2 }

  // spread made obj and pre-defined obj like the above one works different on spread operator
  console.log(spreadExample(obj))


// example two
// works on any iterable
let str = "Hello";
console.log( [...str] ); // H,e,l,l,o
console.log(Array.from(str))
