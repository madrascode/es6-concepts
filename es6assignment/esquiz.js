//Q1: Guess the output:
function consoleNum(){
    var num=10;
    var isWorkshop=true;
    if(isWorkshop){
      let num=20;
     console.log(num);
  }  
  console.log(num)
  }
  
  consoleNum()
  
  //Q2: Guess the output:
  function sum(a,b){
      return a+b;
  }
  console.log(sum(1,'2'));
  
  //Q3: Convert to arrow:
  const sum2=(a,b)=>a+b;
  console.log(sum(1,'2'));
  
  //Q4: Guess the output
  let a=null;
  let b;
  console.log(a==b)
  console.log(a===b)
  
  //Q5: Theoretical ones asked:
//   1)Why typeof null is an object?
//   2) Difference between let and const apart from scope: The way they are hoisted