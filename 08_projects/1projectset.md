# projects related to DOM

## project link

[click here](https://stackblitz.com/edit/js?file=index.js)


# solution code

## project 1

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>color switcher</title>
    <link rel="stylesheet" href="style1.css">
</head>
<body>
    <nav>
        <a href="/" aria-current="page">Home</a>
        <a href="_blank"> guidelines</a>
    </nav>
        <h1> COLOUR SWITCHER PALATTE</h1>

<div class="canvas">
    <span class="button" id="grey" style=" background-color: rgb(147, 156, 156);"></span>
     <span class="button" id="white" style=" background-color: rgb(255, 255, 255)"> </span>
    <span class="button" id="green" style=" background-color: rgb(47, 102, 59)"> </span>
    <span class="button" id="blue" style=" background-color: rgba(41, 60, 233, 0.832)"> </span>
</div>
 <h2> click on box to change the colour</h2>
<script src="project1.js"></script>
</body>
</html>
```


``` css
nav{
    background-color: #c5b7b7;
    padding: 10px 15px;
    text-align: center;
    text-decoration: none;
    display: flex;
    text-align: center;
    justify-content: center;
}
body{
    text-align: center;
    justify-content: center;
}
a{
    background-color: #fff;
    padding: 10px 30px;
    border-radius: 8px;
    color: #212121;
    border: 2px solid black;
    display: flex;
    margin: 30px;
}

.button{
    padding: 60px 50px;
    border-radius: 8px ;
    border: 5px solid black;
    display: flex;
    justify-content: center;
    margin: 5px;
}
div{
    display: flex;
    text-align: center;
    justify-content: center;
}

.button:hover{
      border: 2px solid white;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
```


``` javascript

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body') 

buttons.forEach(function(button) {
    console.log(button)
    button.addEventListener('click', function(event){
        console.log(event);
        console.log(event.target);
        if(event.target.id === "grey"){
            body.style.backgroundColor = event.target.id
        }
         else if(event.target.id === "white"){
            body.style.backgroundColor = event.target.id
        }
         else if(event.target.id === "green"){
            body.style.backgroundColor = event.target.id
        }
         else if(event.target.id === "blue"){
            body.style.backgroundColor = event.target.id
          }
        else{
            body.style.backgroundColor = event.target.id

        }
    })
})


```