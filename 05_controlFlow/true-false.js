// truthy and falsy value

const userEmail = []

// if (userEmail) {
//     console.log('GOT USER EMAIL');
// }
// else {
//     console.log(`dont have user email`);
    
// }

/* falsy value -
false , 0 , -0 , bigInt (0n) , emptystring (" ") , null , undefined , NaN
*/

/* truthy value -
 "0" , "false" , " " , [] , {} , function(){} ,  
*/

if(userEmail.length === 0){
   console.log("array is empty");
}

const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
console.log("object is empty");
}


// Nullish coalescing operator (???) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15

console.log(val1);
