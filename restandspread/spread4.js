// spread works with only iterables like string , array
const alpha = { name: 'Krishna', place: "Vrindavan" };
const beta = { name: "Ram" ,age: 1/0};
const combined = {...alpha, ...beta};
const combinedObj = { a:1,...combined, b:2}

// console.log(combined)
// console.log(combinedObj)

const spreadExample3 = (a)=>{
    console.log(a)
}

spreadExample3(combinedObj)


