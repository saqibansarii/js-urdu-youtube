const user = {
    username: "saqib",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`Got user details from database`)
        // console.log(`Username: ${this.username}`)
        // console.log(this)
    }
}

// console.log(user)
// console.log(user.getUserDetails())
// console.log(this)



function User (username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }

    return this
}


// Constructor function
// In javascript new keyword is a constructor function
// 1. when you use the new keyword it create the new object
// 2. It call the constructor function due to the new keyword
// 3. .this key word wrap all the arguments in it and give it to you
// 4. then it delivers to you
const userOne = new User("saqib", 12, true)
const userTwo = new User("chai aur code", 11, false)
console.log(userOne.constructor)
// console.log(userTwo.greeting())
