let a = "";
let b= "";
let op_bool = false;
let op = "";
const display = document.getElementById("display");




const num_elements = document.querySelectorAll('.number');

num_elements.forEach(element => {element.addEventListener('click',() => {
    
    
    if(!op_bool){
        a += element.id;
        display.textContent = a;
    }
    else{
        b += element.id;
        display.textContent = b;
    }
    });
        });

const op_elements = document.querySelectorAll('.operator');

op_elements.forEach(element => {element.addEventListener('click',() => {
    if(element.id == 'equal' && op_bool == true){
        display.textContent = operate(parseInt(a),parseInt(b),op);
        a = operate(parseInt(a),parseInt(b),op);
        b = "";
        op = "";
        op_bool = false;
        return;

    }
    if(op_bool == true){
        document.querySelector('#equal').click();
    }
    op_bool = true;
    op = element.id;

    display.textContent = "";

    });
        });

const clear = document.querySelector('#clear');

clear.addEventListener('click',() => {
    a = "";
    b= "";
    op_bool = false;
    op = "";
    display.textContent = "";
});

function numClicked(num){
    
}


function add(a, b){
    return a + b;
}


function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a,b, op){
    switch(op){
        case "add":
            return add(a,b);
            break;
        case "subtract":
            return subtract(a,b);
            break;
        case "multiply":
            return multiply(a,b);
            break;
        case "divide":
            return divide(a,b);
            break;
        default:
            console.log("can't find operator");
            return 0;
    }
}


