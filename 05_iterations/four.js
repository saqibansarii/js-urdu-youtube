// for in loop on object
// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "rubby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`)
// }



// forin loop on array
// const programming = ["js", "rubby", "python", "java", "cpp"]

// for (const key in programming) {
//     console.log(programming[key])
// }




// forof and forin loop on maps
const map = new Map()
map.set('Pk', "Pakistan")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('Fr', "France")
// console.log(map)

// for (const [key, Value] of map) {
//     console.log(key, ':-', Value)
// }

for (const key in map) {
    console.log(map)
}