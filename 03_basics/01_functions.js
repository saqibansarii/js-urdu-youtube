//function

function sayMyName (){
    console.log("S")
    console.log("A")
    console.log("Q")
    console.log("I")
    console.log("B")
}

// sayMyName()


// function addTwoNumbers (num1, num2 ){
//     console.log(num1 + num2)
// }

// function addTwoNumbers (num1, num2 ){
//     let num3 = num1 + num2
//     return num3
// }

function addTwoNumbers (num1, num2 ){
    return num1 + num2
    
}
const result = addTwoNumbers(1, 5)
// console.log(`Result : ${result}`)


function logInUserMessage(username = "sam"){
    if(!username){
        console.log(`Kindly enter a username.`)
        return
    }
    return `${username} just logged in`
}
// console.log(logInUserMessage("Saqib"))
// console.log(logInUserMessage("saqib"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "saiqb",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 600, 100]))