// const { forwardRef } = require("react")

// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log(`INNER : ${a}`)
}


// console.log(a)
// console.log(b)



function One (){
    const username = "saqib"

    function Two(){
        const website = "youtube"
        console.log(username)
        
    }
    // console.log(website)
    Two()
}
// One()

if(true){
    const username = "saqib"
    if (username === "saqib") {
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)




//-------------------------- Interesting -----------------------


// Basics function
console.log(addone(5))
function addone(num){
    return num + 1
}




// Expression

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(10))