// for of loop

// ["", "", ""]
// [{}, {}, {}]


// forof loop on array
// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(`Value of num: ${num}`)
// }



//forof loop on strings
// const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }



// Maps

const map = new Map()
map.set('Pk', "Pakistan")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('Fr', "France")

// console.log(map)
for (const [key, Value] of map) {
    console.log(key, ':-', Value)

}



// forof loop is not for objects
// const myObject = {
//         game1: 'NFS',
//         game2: 'spiderman'
//     }
// for (const [key, Value] of myObject) {
//     console.log(key, ':-', Value)
// }