
const userData = {
    name: "Dheeraj",
    surname: "Purohit",
    age: '22',
    education: "BE"
}

const combineNewData = {...userData, sports: "Silambam"}


function printUserData({name, sports: khel}){
    // here we are using destructuring
    // we have to use same name as property
    console.log(name, khel)
}


console.log(printUserData({...combineNewData, sports: "Yoga"}))