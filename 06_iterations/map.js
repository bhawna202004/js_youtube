const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNum.map( (num) => num + 10)

console.log(newNums);

// myNum.forEach( (num) => {
//     result = num + 10
// console.log(result);
// })


// chaining
const myNewNums = myNum
                .map((num) => num * 10 )
                .map((num) => num + 1 )
                .filter((num) => num >=40)

console.log(myNewNums);

