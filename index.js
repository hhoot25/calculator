let a = "";
let b= "";
let last_result = "";
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
        if(b == ""){
            return;
        }
        //custom text if user tries to divide by 0
        if(op == 'divide' && b == "0"){
            document.querySelector('#clear').click();
            display.textContent = "aww heck nah lil bro";
            
        }
        else{
            display.textContent = operate(parseFloat(a != "" ? a : last_result),parseFloat(b),op);
            last_result = operate(parseFloat(a != "" ? a:  last_result),parseFloat(b),op);
        }
        a = "";
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

    

    });
        });

const clear = document.querySelector('#clear');

clear.addEventListener('click',() => {
    a = "";
    b= "";
    last_result = "";
    op_bool = false;
    op = "";
    display.textContent = "";
});

function numClicked(num){
    
}


function add(a, b){
    return roundNumber(a + b, 5);
}


function subtract(a,b){
    return roundNumber(a - b, 5);
}

function multiply(a,b){
    return roundNumber(a*b, 5);
}

function divide(a,b){
    return roundNumber(a/b , 5);
}

function roundNumber(number, digits){
    let multiple = Math.pow(10, digits);
    let rndedNum = Math.round(number * multiple) / multiple;
    return rndedNum;
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


