function calculateCartPrice(val1, val2, ...num1){          // ... is rest method for multiple argument
return num1
}

// console.log(calculateCartPrice(200 , 233, 232, 933));

const user = {
    userName : "Bhawna",
    price : 1090,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    userName: "sam",
    price: 399
})

const myNewArray = [200, 300, 400, 500]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100, 300, 600, 800]));
