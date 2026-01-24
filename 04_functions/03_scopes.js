// {} = scope
// global scope - outide if , value in global dcope available for block scope
// block scope - inside if , value in block scope not available for global 


// var c = 300
let a = 300
if(true){
let a = 10
const b = 20
 console.log("inner", a);
}

console.log(a);
// console.log(b);
// console.log(c);

//nested scope - child acess parent
function one(){
      const userName = "bhawna"

      function two(){
        const website = "youtube"
        console.log(userName);
        
      }
    //   console.log(website);
      two()
}
one()

if (true){
    const userName = "bhawna"
    if( userName === "bhawna"){
        const website = " yt"
        console.log(userName + website);
        
    }
    // console.log(website);
    
}
// console.log(userName);


// +++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++
console.log(addone(5));
function addone (value){
    return value + 1
}

//   console.log(addtwo(5));    // give error
const addtwo = function(value){
    return value + 2
}
 console.log(addtwo(5));
