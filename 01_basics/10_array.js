// array

const myArr = [0, 1, 2, 3, 5 ] 
const myHeros = ["shaktiman", "spiderman"]

const myArr2 = new Array(1, 2, 3, 4, 5)
console.log(myArr2.at("4"));

// array method

// myArr2.push(6)    // [ 1, 2, 3, 4, 5, 6]
// myArr2.push(7)    // [ 1, 2, 3, 4, 5, 6, 7]
// myArr2.pop()       // [ 1, 2, 3, 4, 5, 6]

// myArr2.unshift(9)   // add element at start
// myArr2.shift()     // shift the array
console.log(myArr2);

console.log(myArr2.includes(9));   // tells the presence by true and false
console.log(myArr2.indexOf(5));

// const newArr = myArr2.join()   // join - convert array into string
// console.log( myArr2);
// console.log( newArr);

// slice and splice 
console.log("A", myArr2);

const myn1 = myArr2.slice(1,3)
console.log(myn1);
console.log("B", myArr2);
