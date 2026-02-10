const clock = document.getElementById('clock')

// let date = new Date()              
// console.log(date.toLocaleTimeString());

setInterval(function(){    // run after every movement
let date = new Date() 
// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
}, 1000)