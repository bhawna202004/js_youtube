const form = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value) // this give empty result

form.addEventListener('submit', function(e){     // to stop default action 
    e.preventDefault()      // prevent default action from submit

    const height = parseInt(document.querySelector('#height').value) // string parse to int value
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === ' '  || height < 0 || isNaN(height)){
        result.innerHTML = `please give a valid height ${height}`
    }
    else if(weight === ' '  || weight < 0 || isNaN(weight)){
        result.innerHTML = `please give a valid height ${weight}`
    }
    else{
       const bmi = (weight / ((height**2)/10000).toFixed(2))
       // show result
       result.innerHTML = `<span>${bmi}</span>`;
  
    }

})

