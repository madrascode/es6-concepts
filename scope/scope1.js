let a = 100
function App() {
  a = 42   // here a is global so it wont cause shadowing effect 
  console.log('1', a)
}

App()