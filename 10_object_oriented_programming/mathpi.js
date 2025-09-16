// console.log(Math.PI)
// Math.PI = 5


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)


// this way you can also create object
// const mynewObject = Object.create(null)


// object creation
const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nai bani")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)

    }
}