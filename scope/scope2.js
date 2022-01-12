// good question
// multiple concepts we can see here :->

let a = 100

function App() {  
  console.log('1', a)
  let a = 42 // this program is a classic example of how EC is created at functional level first
  console.log('2', a)
  {
    let a = 100
  }
  console.log('3', a)
}

App()


let v = 45

function m(){  
  console.log(v)
}

// m();
