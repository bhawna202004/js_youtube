
//+++++++++++++++++++++++ NUMBERS +++++++++++++++++++++

const score =   400.333
// console.log(score);                 // 400.333

const balance = new Number(300)
//  console.log(balance);                        // [Number: 300]
//  console.log(balance.toFixed(2));            // 300.00
//  console.log(balance.toExponential());      // 3e+2
//  console.log(balance.toString());          // 300  // it convert num into string and now it use all methods of string

//  console.log(score.toPrecision(4));      // 400.3
//  console.log(score.toPrecision(2));     // 4.0e+2  // convert it automatically in exponential

const hundreds = 100000000
//  console.log(hundreds.toLocaleString());                  // 100,000,000 // BY deafult read in US standard
//  console.log(hundreds.toLocaleString('en-IN'));          //10,00,00,000 // read in indian standard
//  console.log(Number.EPSILON);                           //  2.220446049250313e-16



// ++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++

// console.log(Math);       
// console.log(Math.abs(-40));          // 40
// console.log(Math.round(40.855));    //41 ( give round value )
// console.log(Math.ceil(40.35));     // 41 ( give round upper value )
// console.log(Math.floor(40.34));   // 40  (give round lower value)
// console.log(Math.log(2));
// console.log(Math.sqrt(81));      // 9 


console.log(Math.random());  // give value between 0 and 1
console.log(Math.random()*10);   // give value between 1 to 10 
console.log((Math.random()*10) + 1); // to avoid 0.0 type value , add 1
console.log(Math.floor(Math.random()*10) + 1);   // floor, round of the decimal value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // keep the size fix on basis of max and min 


