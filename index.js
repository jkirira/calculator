const add = require("./add.js")


const calcButtons = document.getElementById('calc-main');
const workingArea = document.getElementById('workingArea')
const buffer = document.getElementById('buffer')

previousValue = ''

calcButtons.addEventListener('click', (e) => {
    dispatch(e.target.getAttribute("data-type"));
})

function dispatch(val){

    if(val == 'number'){
        input(val);
        return;
    }

    switch(val){
        case "answer":
            calculate();
            break;
        case "clear":
            clear();
            break;
        case "backspace":
            backspace();
            break;
        case "plus":
            input("+");
            add();
            break;
        case "minus":
            input("-");
            minus();
            break;
        case "divide":
            input("/");
            divide();
            break;
        case "multiply":
            input("*");
            multiply();
            break;
        case "point":
            input(".")
            break;
        case "square":
            input("**")
            break;
        default:
            return;
    }
    // }
}


function input(val){
    if( val == "." || (getLastElement() == ".") ){
        workingArea.textContent += val 
    }

    if ( isNaN(getLastElement()) && isNaN(val) ){
        console.log("both are not")
        return
    } else if ( !isNaN(getLastElement()) && !isNaN(val) ) {
        workingArea.textContent += val
    } else if ( val == undefined ) {
        workingArea.textContent += val
    } else if ( (getLastElement() == undefined ) && !isNaN(val) ){
        workingArea.textContent += val
    } else {
        workingArea.textContent += " " + val
    }
}

function backspace(){

    a = workingArea.textContent.split(" ")
    last_elem = a.slice(-1)[0]
    console.log(a)

    if ( isNaN( last_elem ) ){
        
        a.pop() 
        workingArea.textContent = a.join(" ")

    } else {
        if( last_elem.length > 1 ) {

            var x = last_elem.split("")
            x.pop()
            new_last_elem = x.join('')

            a.pop()
            a.push(new_last_elem)

            workingArea.textContent = a.join(" ")

        } else {
            a.pop() 
            workingArea.textContent = a.join(" ")
        }

    } 
    
}

function getLastElement(){
    a = workingArea.textContent.split("")
    //console.log(a)
    return a.slice(-1)[0]
}

function clear(){
    workingArea.textContent = ''
}

function calculate(){
    a = workingArea.textContent.split('')
    output_val = eval ( a.join('') )
    console.log( output_val )
    buffer.textContent = output_val + " < ";
    previousValue = output_val
}


function minus(x, y){ return x-y }
function divide(x, y){ return x/y }
function multiply(x, y){ return x*y}

module.exports = add;

//  minus, divide, multiply};
