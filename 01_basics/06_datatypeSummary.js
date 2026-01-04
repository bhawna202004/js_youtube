
/* # PRIMITIVE DATATYPE- 7 type
String, Number, Boolean, null, undefined, Symbol, bigInt
*/

let str = "bhawna"  // string
const score = 100  // number
const scoreValue = 100.3 // number
const isLoggedIn = false  // boolean
const outsideTemp = null    // null
let value;     // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // confirms that both values are taken different 

const bigNumber = 23456666666644322654n



/* REFERENCE DATATYPE  (non-primitive) -
Arrays, Objects, functions
*/

const heros = ["batman", "spiderman", "women"]  //array

//objects
let myObj = {
 name : "bhawna",
age : 21,
};

// function
function myFunction() {
    console.log("hello world ");
}


// to check type of datatype
console.log(typeof id);


/*

type of:                                 "value":
# string                                 "string"
# number                                 "number"
# undefined                             "undefined"
# null                                   "object"
# boolean                                "boolean"
# object(native or                       "object"
  does not implement)
# object(native or                      "function"
  host and does implement)

  */


  //    *********** memory **************

  // stack  (primitive) - it return copy
  let email = "bgarg2344@yaahooo.com"
  let identity = email
  identity = "aadhar card"

  console.log(email);
  console.log(identity);
  
  //heap   (non-primitive) - it return reference(original)

  let user1 = {
    user : "user@google.com",
    upiId : "user@ybl",
  };
  
  let user2 = user1 

user2.user = "bhawna@google.com" // to change the object

console.log(user1.user);
console.log(user2.user);
