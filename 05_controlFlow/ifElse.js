// if
const isUserLoggedIn = true
const temperature = 41

// if (temperature > 50) {
//     console.log("less than 50");
    
// }
// else{
//     console.log("greater than 50");
// }

// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
    
// }
//     console.log(`user power: ${power}`); //give error due to presence of var in block scope

const balance = 1000
// if (balance > 500) console.log("test");  //implicit if code run in one line

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("les than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromGmail = true

if(userLoggedIn && debitCard){       // && = both statement true to run
    console.log("allow to buy")
}

if (loggedInFromGmail || loggedInFromGoogle) {   // it check for multiple cond. it run if one is true
    console.log("user logged in");
    
}
