// example 1
{
  console.log('example number one')
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const spreadExample2 = ([first, second, ...rest]) => {
  console.log(first, second, rest)
}
console.log(spreadExample2(array))
// rest with spread
console.log(spreadExample2([...array, 11, 12, 13]))
}


// example 2
{
  // obejct aliasis is used over here , we are passing values of a and b to aaloo and bhaaloo
console.log('example number two')
const spreadExampletwo = ({ a: aaloo, b: bhaaloo }) => {
    // destructuring
    // console.log(a,b)
    console.log(aaloo, bhaaloo)
  }
  
const obj = { a: 1, b: 2 }
spreadExampletwo(obj)

}

// example number three
{
  console.log('example number three')
  const spreadExamplethree = ({ b: bhaaloo, a: aaloo }) => {
    console.log(aaloo, bhaaloo)
  }
  const obj = { a: 1, b: 2 }
  spreadExamplethree(obj)
}