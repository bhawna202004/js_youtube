// this - current context 

const user = {
    username : "bhawna",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"      // context change
// user.welcomeMessage()     
// console.log(this);        // {}



// ++++++++++ type 1 function ++++++++

// function chai(){
//     let userName = "sneha"
//     console.log(this);
    
//     console.log(this.userName);    
    
// }
// chai()



// +++++++++ tyep 2 function +++++++++
// const chai = function (params) {
//   let userName = "sneha"
//     console.log(this.userName);
    
// }
// chai()




// +++++ type 3 - arrow function +++++++++

// const chai = () => {
//  let userName = "sneha"
//   console.log(this);
  
// }
// chai()

const addTwo = (num1 , num2) => {
 return num1 + num2
}
console.log(addTwo(3,4));


// implicit return in one line in arrow fun

const addTwo2= (num1 , num2) => num1 + num2

console.log(addTwo2(9,4));

// another typr for arrow declaration
const addTwo3 = (num1 , num2) => ( num1 + num2 )
console.log(addTwo3(5,4));

// object declare by arrow function
const objectArrow = (num1 , num2) => ({
   username : "bhawna",    
    price : 999,

})
console.log(objectArrow());