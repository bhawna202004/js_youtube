
let score = true

console.log(typeof score)

let valueInNumber = Number(score)

console.log(valueInNumber)  
console.log(typeof valueInNumber)  

// "33" => 33
// "33abc"  => NaN
// true  => 1
// null =>  0
// undefined => NaN


let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true 
// "string" => true 
// 0 => false  
//  "" => false 
//  null => false 
//  undefined => false

let someNumber = "33abc"
let StringNumber = String(someNumber)
console.log(StringNumber);
console.log(typeof StringNumber);

// 33 => 33
// "33abcs" => 33abcs
// null => null
// undefined => undefined
