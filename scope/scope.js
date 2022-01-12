// Global Scope - Variable is declared outside the function. This variable is accessible inside every function present in the code.

// Function Scope - Variable is declared inside (within) a function, outside that it is not accessible anywhere.

// Block Scope - In short, block scope means variables which are declared in a { } block are not accessible outside it. This block can be an if statement, for/while loop, etc.

// example 1

if (true) {
    let a = 2
    // var a = 2;
  }

//   console.log(a)
// output
// output is a is not defined
// because a is inside block level scope which is not accessible outside of it.


// example 2
let a = 42
{
  let a = 100
}
// console.log(a)
// 42

// output
// shadowing is not working in block level because 
// (let in block scope is attached with BLOCK obj) and (let in global scope is attached with SCRIPT obj)
// outer let value is printed 42

// example 3
// temporal dead zone
// console.log(x)
let x = 100

// output
// - Cannot access 'x' before initialization
