// if statement

const isUserLoggedIn = true
const temp = 41

if ( temp === 40 ) {
    // console.log(`Temperature is less than 50`)
}
else{
    // console.log(`Temperature is greater than 50`)
}



// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`)
// }

//  console.log(`User power: ${power}`)


//---------------- shorthand notation-------------

const balance = 1000

// Implicit code is written in one line
// if(balance > 500) console.log("test"),console.log("test2")


// if (balance < 500){
//     console.log("less than")
// }
// else if (balance < 750) {
//     console.log("less than 750")
// }
// else if (balance < 900) {
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy")
}

if (loggedInFromGoogle ||  loggedInFromEmail) {
    console.log("User logged in")
}