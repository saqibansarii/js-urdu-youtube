const user = {
    uesrname: "saqib",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.uesrname} , welcome to website`)
        console.log(this)
    }

}

// user.welcomeMessage()
// user.uesrname = "sam"
// user.welcomeMessage()

// console.log(this)


// function chai(){
//     let username = "saqib"
//     console.log(this.username)
// }
// chai()


// const chai = function(){
//     let username = "saqib"
//     console.log(this.username)
// }
// chai()



// const chai = () => {
//     let username = "saqib"
//     console.log(this)
// }
// chai()



// Explicit return arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))



// Implicit return arrow function. Don't use arrow function

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2)

const addTwo = (num1, num2) => ({username : "saqib"})

console.log(addTwo(3, 4))


// const myArray = [1, 2, 3, 4, 5]
// myArray.forEach()