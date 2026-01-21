const marvelHeros = ["thor","ionman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvelHeros.push(dc_heros)       // it push whole array into other array

// console.log(marvelHeros);   // [ 'thor', 'ionman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvelHeros.length);  // 4

// console.log(marvelHeros[3][1]);  // flash

const heros = marvelHeros.concat(dc_heros)    // it push all element of one array to other & return new array

console.log(heros); 

const allHeros = [...marvelHeros, ...dc_heros]    // spread method, easy then concat

console.log(allHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 2, [7, 1]]]
const realArr = anotherArr.flat(Infinity)        // flat , return spread array by complex array like anotherArr
console.log(realArr);

console.log(Array.isArray("bhawna"));        // it checks the array
console.log(Array.from("bhawna"));           // it convert into array
console.log(Array.from({name: "bhawna"}));     // generate array from key , value....

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));   // return array from set of elements
