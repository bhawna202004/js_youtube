// const tinderUser = new Object()       // singleton object
const tinderUser = {}                 // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sham"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "someuser@gmail.com",
    fullname: {
        userfullname : {
            firstname : "bhawna",
            lastname : "garg"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);     // return value of object inside object 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3:"A", 4:"B"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)  // for union

const obj3 = {...obj1,...obj2}    // spread operator for union
// console.log(obj3);

const users = [    
    {
        id: 1,
        email: "happy@mail.com"
    },
    {
        id: 1,
        email: "happy@mail.com"
    },
    {
        id: 1,
        email: "happy@mail.com"
    },
    { },
    {},
]     // array in object 

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));      // object.   :- convert object into array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));    // tells the existence of the entry
