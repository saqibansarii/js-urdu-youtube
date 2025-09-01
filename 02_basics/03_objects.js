// Singleton
// object.create



// object literals


const mySym = Symbol("key1")


const JsUser = {
    name: "saqib",
    "full name": "Saqib Ansari",
    [mySym]: "mykey1",
    age: 23,
    location: "Multan",
    email: "saqib@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]


}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// console.log(typeof JsUser[mySym])

JsUser.email = "saqib@chatgpt.com"
// console.log(JsUser)

// Object.freeze(JsUser)
JsUser.email = "saqib@microsoft.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello js Users")
}


JsUser.greetingTwo = function(){
    console.log(`Hello js Users, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())