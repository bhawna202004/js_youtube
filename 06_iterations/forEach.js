
const programming = ["js", "rb", "c", "c++", "java"]

// programming.forEach( function(item) {
//      console.log(item);
    
//     });



// programming.forEach( (item )=> {
//     console.log(item);
    
// })



// function printMe(item){
//     console.log(item);
// }
// programming.forEach(printMe),



programming.forEach( (item, index, arr )=> {
    console.log(item, index, arr);
    
})

const mycooding = [
{
    languageName : "javascript",
languageFileName : "js"
},
{
    languageName : "c++",
languageFileName : "cpp"
},
{
    languageName : "python",
languageFileName : "py"
}
]

mycooding.forEach ((item) => {    // return value inside object in array
console.log(item.languageName);   

})
