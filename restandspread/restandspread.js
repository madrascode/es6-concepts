const myFunc = ([x1, x2, x3, ...rest]) => {
    console.log(x1);
    console.log(x2);
    console.log(x3);
    console.log(rest)
  };
  const arr1 = [1, 2, 3,4,5,6,7,8];
  myFunc(arr1); // spread works like iterator ;->
