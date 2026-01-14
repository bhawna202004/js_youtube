
let score = "33abc"

console.log(typeof score)  // string

let valueInNumber = Number(score)

console.log(valueInNumber)  // NaN
console.log(typeof valueInNumber)    // number

// "33" => 33
// "33abc"  => NaN
// true  => 1
// null =>  0
// undefined => NaN


let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);     // false

// 1 => true 
// "string" => true 
// 0 => false  
//  "" => false 
//  null => false 
//  undefined => false

let someNumber = "33abc"
let StringNumber = String(someNumber)
console.log(StringNumber);               // 33abc
console.log(typeof StringNumber);          // string

// 33 => 33
// "33abcs" => 33abcs
// null => null
// undefined => undefined
