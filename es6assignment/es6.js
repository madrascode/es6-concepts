function consoleNum() {
    var isWorkshop = true;
    var num = 10;
    if (isWorkshop) {
      let num = 20;
      console.log(num);
    }
    console.log(num);
  }
  consoleNum();
  
  function sum(a, b) {
    return a + b;
  }
  console.log(sum(1, "2"));
  
  const sum2 = (a, b) => a + b;
  console.log(sum2(1, "5"));
  
  let a = null;
  let b;
  
  console.log(a == b);
  console.log(a === b);
  
  console.log(a);
  console.log(b);
  // console.log(typeOf(a));
  // console.log(typeOf(b));
  
  var aa = 2;
  var aa = 3;
  console.log(aa);
  
  // let bb = 18;
  // let bb = 20;
  // console.log(b);
  
  const myData = {
    name: "Akanksha",
    hobby: "Painting",
  };
  myData.name = "Tanay";
  console.log(myData);
  
  // myData = {
  //   name: "Tanay",
  //   hobby: "Cracking PJs",
  // };
  
  // console.log(myData);
  
  let arr1 = [4, 5, 6];
  [1, 2, 3, 4, 5, 6, 7, 8];
  
  let arr2 = [1, 2, 3, ...arr1, 7, 8];
  console.log(arr2);
  
  var arr3 = [1, 2];
  var arr4 = [arr3, [3, 4]];
  var arr5 = [...arr4, [7, 8]];
  console.log(arr4);
  console.log(arr5);
  
  let aaa = [..."apple"];
  console.log(aaa);
  
  var aaaa = 1;
  var bbbb = 2;
  var [aaaa, bbbb] = [bbbb, aaaa];
  
  console.log(aaaa);
  console.log(bbbb);