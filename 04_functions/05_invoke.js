// Immediately Invoked function expressions (IIFE) 
//  IIFE used to reduce global pollution and
//  implement function immediately by putting function inside parenthesis'()'


(function chai(){           // named IIFE
    console.log(`DB connected`);
})
();             // ; is must for ending

 (function aurcode () {
    console.log(`DB connected two`);
} ) 
();

((name) => {   // unnamed IIFE 
    console.log(`understand js ${name}`);
}) 
('bhawna');