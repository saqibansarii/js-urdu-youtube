// Primitive: There are 7 primitive datatypes

// 7 type : String, Number, Boolean, null, undefined, Symbol, Bigint


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)


const bigNumber = 345345345345345454n




// Refrence (Non Primitive)

// Array, Objects, Funcitons


const heros = ["superman", "spiderman", "ironman"];
let myObj = {
    name: "saqib",
    age: 22,

}

const myFunction = function () {
    console.log("Hello world");
}

// console.log(typeof anotherId);


//-------------------------- Memories ------------------

// 2 types of memory
// stack memory and heap memory
//stack memory is used in (Primitive) dataype. When stack memory is used it give us copy
// Heap memory is used in (non Primitive or refrence) datatype. When heap memory is used it give us refrence.

let myYoutubename = "saqibansari.com"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@xyz"
}

let userTwo = userOne

userTwo.email = "saqib@google.com"

console.log(userOne.email)
console.log(userTwo.email)
