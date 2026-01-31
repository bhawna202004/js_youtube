// for of

// ["", "", ""]     strings in array
// [{}, {}, {}]     objects in array

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    console.log(i);
}

const greetings = "hello world!"
for (const greet of greetings) {
    if(greet == " "){
   continue;
    }
    console.log(`each char is ${greet}`);
    
}

// maps

const map = new Map()
map.set('IN', "india")
map.set('USA', "united state of america")
map.set('Fr', "france")
map.set('IN', "india")   // reduce duplicacy, return unique key-value pair

console.log(map);
console.log(map.keys());

for (const [key,value] of map) {
    console.log(key,`:-`,value);
    
}

// "for in"  in map is not iterable
// for (const key in map) {
//    console.log(map[key]);
   
// }

// for of loop not iterable for objects

const obj1 = {
    userName : "bhawna",
    studentId : 123456,
    enrollIn : "btech"
}
// for (const [key , value] of obj1) {
//     console.log(key , ':-', value);
// }

// for in

for (const keys in obj1) {
       console.log(` ${keys} is ${obj1[keys]}`);
 }

const programming = ["js", "rb", "c", "c++", "java"]
// for in
for (const language in programming) {
    console.log(programming[language]);      // give keys by object
}
// for of
for (const element of programming) {
    console.log(element);          // give direct all keys
}