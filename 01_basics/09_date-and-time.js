
// ++++++++++++++++  dates  +++++++++++++++++++++++++++

let myDate = new Date()
// console.log(myDate.toString());  //Thu Jan 08 2026 16:19:12 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString());   // 8/1/2026, 4:19:12 pm
// console.log(myDate.toDateString());    // Thu Jan 08 2026
// console.log(typeof myDate);     // object

let myCreatedDate = new Date(2026, 0, 23, 15, 3, 51) 
// console.log(myCreatedDate);   // 2026-01-22T18:30:00.000Z , doesn't clearify

// console.log(myCreatedDate.toDateString());   // Fri Jan 23 2026
// console.log(myCreatedDate.toLocaleString());   // 23/1/2026, 3:03:51 pm

let myCreateDate = new Date("01-14-2025")
// console.log(myCreateDate.toDateString());  // Tue Jan 14 2025




// ++++++++++++++++++++++ Time stamp +++++++++++++++++++++++

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime()); // time in millisecond
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1 );    // 1 - january       
console.log(newDate.getUTCMonth());     // UTC: universal coordinated time 

// `${newDate.getDay}and the time `

console.log(newDate.toLocaleString('default',{
    weekday:"short",
}));
