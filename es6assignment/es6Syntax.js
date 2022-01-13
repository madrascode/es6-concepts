// example 1
const aloo = 1;
if(aloo == 1){
    const a = 2;
    console.log(a)
}
console.log(aloo)


// example 2
const multiply = (x,y) => x*y
console.log(`multiply result ${multiply(2,2)}`)

// example 3
const customer = {
    name: 'Bhaloo'
}
const card = {
    amount: 20,
    product: "Aaalo",
    unitprice: 50
}

// destructuring
const {name:customerName} = customer
const {amount, product, unitprice} = card
const message = `Hello ${customerName} wants to buy ${amount} ${product} for price of ${unitprice} per piece`
console.log(message)

// example no 4
const neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"]

// skipping 2nd index by comma ','
const [ceo, ,mentor] = neog

console.log(ceo, mentor)


// example no 5

const arr = ["MA", "TA", "PA", "CA"]
const [firstname, surname] = arr
console.log(firstname)
console.log(surname)


// example no 6
const Aaloo = "Tasty";
const Bhaloo = "Cute"
const Obj = {
    Aaloo,
    Bhaloo
};
console.log(Obj)


// example no 7

const a = 5;
const b = 10;
console.log(`Fifteen is ${a+b} and not ${2*a+b}`)


// example no 8

const arithmeticsObj = {

    sum:(num1, num2)=> num1 + num2,
    multiply:(num1, num2)=>num1 * num2
}

const {sum: additon, multiply: multiplication} = arithmeticsObj

console.log(additon(1,2))
console.log(multiplication(6,8))


// example no 9
function packIt(){
    console.log(Array.from(arguments))
}

packIt(1,2,3,4,5,5)


// example no 10
const hello = () => "Hello"
const welcome = () => "Welcome"
const [Hello = hello(), Welcome = welcome()] = ["Namaste"]
console.log(Hello, Welcome)

// predicted output
// Namaste Welcome

// example no 11
const obj = {
    chalu : 1,
    bhallo : 2
}

var {c : bhallo = [2,3,4].push(5), bhallo} = obj 
console.log(bhallo)

// output
// syntax error

// example no 12

const avengers = {
    operaton: "Assemble",
    members: [
        {ironMan: "Tony Stark"},
        {captainAmerica: "Steve Rogers"},
        {blackWidow: "Natasha Romanoff"}
    ]
}

const {operaton, members} = avengers
const [ironMan, captainAmerica, blackWidow] = members
console.log(operaton)
console.log(members)
console.log(ironMan, captainAmerica, blackWidow)