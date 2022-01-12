
const restExample = (a, ...rest) => {
    console.log(a, rest)
  }
  
  console.log(restExample(2, 3, 4, 5, 6, 7, 8, 9, 10))