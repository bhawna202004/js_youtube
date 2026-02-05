// -------------- reduce -----------
// redue is to process all elements of an array and combine them into a single output value using an accumulator function.


/* reduce() is used when you want to :-
1)  Combine all elements of an array
2) Calculate a final result from many values
3) Avoid writing loops manually   */



const myNums = [1, 2, 3]

const initialValue = 0
// by normal function
const mySum = myNums.reduce(function (accumulator , curentvalue){ 
    console.log(`value of acc : ${accumulator} and current value : ${curentvalue}`);
    
    return accumulator + curentvalue
} , initialValue )
console.log(mySum);



// by arrow function
const myTotal = myNums.reduce( (acc , curr) => acc + curr,  initialValue )
console.log(myTotal);



const shoppingCart = [
    {
        itemName : "shoes",
        itemPrice : 599
    },
    {
        itemName : "dress",
        itemPrice : 799
    },
    {
        itemName : "body mist",
        itemPrice : 300
    },
    {
        itemName : "tops",
        itemPrice : 700
    },
    {
        itemName : "moisturizer",
        itemPrice : 500
    },
]

const costToPay = shoppingCart.reduce( (AccumulatorCost , Currentcost) => AccumulatorCost + Currentcost.itemPrice , initialValue )

console.log(costToPay);
