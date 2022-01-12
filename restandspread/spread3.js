const jagannathjiObj = {
    jagannathrathGadi : "Nandighosha"  
}
const subhadrajiObj = {
    subhadrajirathGadi : "Dev-dalan"
}
const baldevjiObj = {
    baldevjirathGadi : "Tal-dwhaj"
}
function combineRathGadi(a,{}){    

    // using this 'a' parameter directly
    // which means it contains the whole object
    console.log('a type -> ', typeof(a))
    console.log('a object ->',a)
    console.log(a.subhadrajirathGadi)
    console.log(a.baldevjirathGadi)
    console.log(a.jagannathrathGadi) 


    // 2 variation

}

// concept - spread works with unique values , here we are merging multiple unique objects into single object
// in combinedrathGadi function we can access those unique properties under one roof.

const combined = {...jagannathjiObj, ...subhadrajiObj,...baldevjiObj}
// console.log(combined)

combineRathGadi({...jagannathjiObj, ...subhadrajiObj,...baldevjiObj});
