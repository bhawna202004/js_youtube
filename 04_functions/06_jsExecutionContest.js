// javascript execution context 

// value of "this" in browser is "window - object" in terms of global execution context

/*  3 execution context ---
           global execution context
           function execution context
           eval execution context   (used in mongoDB)
*/

// memory creation phase - only allocate the memory to vaiables

//  execution phase - all execution done here

let val1 = 10          
let val2 = 5        
function addnums(num1, num2) {    
    let total = num1 + num2        
    return total
}
let result1 = addnums(val1, val2)     
let result2 = addnums(9, 5)
console.log(result1);
console.log(result2);

// memory creation phase => val1 = undefined ,  val2 = undefined ,
//  addnums = definition , result1 = result2 = undefined.

// execution phase =>  val1 = 10 , val2 = 5 ,
// addnums = new execution context(memory phase => val1 = undefined ,  val2 = undefined ,total = undefined ; execution phase => num1 = 10,num2 = 5, total = 15)


// call stack

