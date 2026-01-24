
function sayMyName () {
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("W");
    console.log("N");
    console.log("A");
}

// sayMyName()

function addTwoNumber (num1 ,num2){      
    // let add = num1 + num2
    // return add

    return num1 + num2    // save memory
}
let result = addTwoNumber(3,5)
console.log("result:",result);


function loginuser(username){
return `${username} just logged in`
}

// let funct= loginuser("jerry")
let funct= loginuser()
console.log(funct);
