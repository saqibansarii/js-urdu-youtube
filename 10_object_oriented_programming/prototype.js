// let myName = "saqib    "
// let myChannel = "chai    "
// console.log(myName.truelenght())


let myHeros = ["Thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Array.prototype.heysaqib = function(){
    console.log(`Saqib says hello`)
}

Object.prototype.saqib = function(){
    console.log(`Saqib is present in all Objects`)
}


// heroPower.saqib()
// myHeros.saqib()
// myHeros.heysaqib()
// heroPower.heysaqib()




// Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true

}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}


// Outdated approach
// Teacher.__proto__ = User


// Modern syntax
// Modern approach to access the properties of another object
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiaurcode       "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True length is : ${this.trim().length}`)
}

anotherUsername.trueLength()
"saqib".trueLength()
"icetea".trueLength()