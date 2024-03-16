
let first_number;
let operator;
let second_number;

console.log(operate(5, '+', 5))


function operate(first_number, operate, second_number){
    if (operate === '+'){
        return add(first_number, second_number)
    } else if (operate === '-'){
        return subtract(first_number, second_number)
    }else if (operate === '*'){
        return multiply(first_number, second_number)
    }
    else if (operate === '/'){
        return divide(first_number, second_number)
    }
}



function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}


function multiply(a, b){
    return a * b;
}


function divide(a, b){
    return a / b
}