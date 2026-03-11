// geerate a random colour

const randomColour = ()=>{
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i <= 6 ; i++){
   color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
console.log(randomColour());

document.querySelector('#start').addEventListener('click',()=>{
    
})