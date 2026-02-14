// js is sequential running

// document.getElementById('owl').onclick = function(){
//     alert("owl clicked")               // by click funciton works
// }



// document.getElementById('owl').addEventListener('click',function () {
//     alert('owl clicked again')
// })



// attachEvent()  --->  used to run internal explorer
// on() --->  used in jquery, instead of addEventListener()  

document.getElementById('river').addEventListener('click',function (e) {
     console.log(e);                        // give all events in browser console
}, false) 

// type, timestamp, defaultPrevented, target, toElement
// srcElement, currentTarget, clientX, screenX, screenY
// altKey, ctrlKey, shiftkey, keycode


// event propogation ---> 
//  event bubbling (false used)-- bottom to top  --->  small to large
// and event capturing (true used)-- top to bottom   ---> large to small


// document.getElementById('images').addEventListener('click',function(e){
//     console.log("clicked inside the ul"); 
// }, false)



// document.getElementById('owl').addEventListener('click',function(e){
//     console.log("owl clicked"); 
//     e.stopPropagation()      // stop bubbling - not go to top element
// }, false)



// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault(); 
//     e.stopPropagation();
//     console.log("goggled clicked");
    
// }, false)


document.querySelector('#images').addEventListener('click', function(e){
   console.log(e.target);       // show target value
   console.log(e.target.parentNode);    // return target with its parent
   console.log(e.target.tagName);      // return target tagname
   if(e.target.tagName === 'IMG'){
    console.log(e.target.id);
    
    let removeIt = e.target.parentNode
    removeIt.remove()
    }
  
  // removeIt.parentNode.removeChild(removeIt)

}, false)