// sigleton
//const tinderUser = new Object()      singleton object

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sami"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        username: {
            firstname: "saqib",
            lastname: "sansari"
        }
    }
}

// console.log(regularUser.fullname.username.firstname)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)


const users = [
    {
        id: 1,
        email: "h@gmai.com",

    },
    {
        id: 1,
        email: "h@gmai.com",

    },
    {
        id: 1,
        email: "h@gmai.com",

    },

]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLogged'))


const course = {
    coursename: "js in urdu",
    price: "999",
    courseInstructor: "saqib"
}

// console.log(course.courseInstructor)

const {courseInstructor: instructor, price, coursename} = course
console.log(price);



// {
//     "name": "saqib",
//     "coursename": "js in urdu",
//     "price": "free"

// }



[
    {},
    {},
    {}
]


