// js is sequential running

// document.getElementById('owl').onclick = function(){
//     alert("owl clicked")
// }

document.getElementById('owl').addEventListener('click',function () {
    alert('owl clicked again')
})

// attachevent() 
// jQuery - .on

document.getElementById('river').addEventListener('click',function (e) {
     console.log(e);
     
}, false) 

// type, timestamp, defaultPrevented, target, toElement
// srcElement, currentTarget, clientX, screenX, screenY
// altKey, ctrlKey, shiftkey, keycode

