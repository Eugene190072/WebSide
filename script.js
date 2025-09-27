let img = document.querySelectorAll("img")

let input_values = [];

function handle() {
    let inputs = document.querySelectorAll("input");
    
    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }
}

let button = document.querySelector('.btn');
button.addEventListener('click', handle);