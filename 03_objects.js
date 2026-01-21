// object literals

const mySym = Symbol("key1")


const jsUser = {
    name: "bhawna",
    "full name": "bhawna garg",
    age: 21,
    [mySym]: "key1",
    location: "jaipur",
    email: "bg6623@gmail.com" ,
    iLoggedIn: false, 
    lastLoginDays: ["monday", "saturday"]
}

console.log(jsUser.email);       // this method not allow for string type key
console.log(jsUser["email"]);    // valid for string key values
console.log(jsUser["full name"]);
console.log(jsUser["mySym"]);

jsUser.email = "bb123@yahoo.com"     // for modification


// Object.freeze(jsUser)           // freeze object from modification. no command modify after this command.


jsUser.email = "bb12@gpt.com" 
console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello js user");
    
}
console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
    
}
console.log(jsUser.greeting2());
