
// old way of doing default parameter in functions
const defaultExampleOne = (a, b) => {
    if (b === undefined) {
      b = 5
    }
    return a + b
  }
console.log(defaultExampleOne(4))


// what will be output?
const defaultExample = (a, b) => a + b
console.log(defaultExample(2))
// NaN
console.log(defaultExample(2, 4))
// 6

const defaultExample2 = (a, b = 5) => a + b
console.log(defaultExample2(3))
// 8 = 3 + 5(default one)



// position of default parameter

const defaultExample3 = (a,c,b=5)=> a + b + c
console.log(defaultExample3(1,3))


const aloo = 1;
if (aloo == 1) {
    const a = 2;
    console.log(a);
}
console.log(aloo);
