document.addEventListener('DOMContentLoaded', ()=> {
    
    let display = document.getElementById('display')
    let btn = document.querySelectorAll('button')

 

    btn.forEach((element) => {
        element.addEventListener('click', () => {

            let numberDisplay = display.textContent

            if(isNaN(numberDisplay)){
                display.innerHTML = ''
            }
            
            if(element.className == 'operan' || element.classList == 'decimal' || element.className == 'percent' || element.className == 'minus'){
                display.innerHTML += element.textContent
                insertNumber(display.textContent)
                
            } else (
                display.innerHTML = element.textContent
            )

            
            if(element.className == 'sign'){
                if (Number(numberDisplay) > 0){
                    display.innerHTML = numberDisplay * -1
                } else {
                    display.innerHTML = Math.abs(numberDisplay)
                }
            }

            if (element.className == 'clear') {
                display.innerHTML = ''
                first_number = 0;
                operator = null;
                second_number = 0;
                output = 0;
            }

            if(element.className == 'operator') {
                if (first_number == null) {
                    display.innerHTML = ''
                } else {
                    operator = display.textContent
                }
            }
            

            if(element.className == 'equal'){
                console.log(first_number + operator + second_number)
                display.innerHTML = output
            }
        })
    
    })


})

let first_number = 0;
let operator = null;
let second_number = 0;
let output = 0;


//console.log(operate(first_number, '+', 5))

function insertNumber(n){
    
    tmp = n
    
    if (tmp[tmp.length-1] == '%'){
        tmp = tmp.slice(0, -1)
        tmp = Number(tmp) / 100
    }

    if (operator == null){
        first_number = tmp;
    } else{
        second_number = tmp;
    }
    
    output = operate(Number(first_number), operator, Number(second_number))
    first_number = output
}


function operate(first_number, operate, second_number){
    if (operate === '+'){
        return add(first_number, second_number)
    } else if (operate === '-'){
        return subtract(first_number, second_number)
    }else if (operate === '*'){
        return multiply(first_number, second_number)
    }
    else if (operate === '/'){

        if (second_number == 0){
            return 'Cannot divide by 0';
        } else {
            return divide(first_number, second_number)
        }
        
    } else {
        return first_number
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