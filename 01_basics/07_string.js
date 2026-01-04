let name = " Bhawna "
let age = 21

console.log("my name is " + name + "and my age is " + age );  // old and boring method 


// string interpolation
console.log(`my name is ${name} and my age is ${age}.`);  // modern method
 

let gameName = new String("BHAWNA-GARG")

console.log(gameName[4]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('A'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherstring = gameName.slice(-9,5) 
console.log(anotherstring);

console.log(gameName.split('-'));  // split the sentences on basis of specified character
console.log(gameName.bold());

const str1 = "          hello          "
console.log(str1);
console.log(str1.trim());   // trim remove the extra space - trimEnd and trimStart

let url = "http://bhawna.com/bhawna%20garg"
console.log(url.replace('%20','-'));    // replace 
console.log(url.includes('sneha'));     // tells specified element is present or not

