function add(a,b) {
    console.log(a+b);
    currentOperation.textContent = a+b;
    return a+b;
}
function subtract(a,b){
    console.log(a-b);
    return a-b;
}
function multiply(a,b) {
    console.log(a*b);
    
    return a*b;
}
function divide(a,b) {
    console.log(a/b);
    return a/b;
}

function operate() {
    switch (operatorValue) {
        case "+":
             add(parseFloat(firstValue),parseFloat(displayValue));
            break;
        case "-":
            subtract(parseFloat(firstValue),parseFloat(displayValue))
            break;
        case "x":
            multiply(parseFloat(firstValue),parseFloat(displayValue))
            break;
        case "÷":
            divide(parseFloat(firstValue),parseFloat(displayValue))
            break;
    }
}

const display = document.querySelector("#display-text");
const currentOperation = document.querySelector("#current-operation");
const previousOperation = document.querySelector("#previous-operation");


let displayValue = "";
let firstValue = "";
let operatorValue = "";

const operator = document.querySelectorAll(".digit.operand");

operator.forEach((operator)=> operator.addEventListener('click',(operator) => {
    firstValue = currentOperation.textContent;
    operatorValue = operator.target.value;
    if (previousOperation.textContent === "") {
        previousOperation.textContent = currentOperation.textContent + operatorValue;
        // firstValue = displayValue;
        displayValue = "";
    }
    else if(previousOperation.textContent !== "" && currentOperation.textContent !== ""){
        console.log("bruh");
        operate();
    }
    currentOperation.textContent = "";
}));



function addDisplay(e) {
    currentOperation.textContent += e.target.textContent;
    displayValue += e.target.textContent;
}
const digits = document.querySelectorAll(".digit.number");

digits.forEach((digit)=> digit.addEventListener('click',addDisplay));



const clear = document.querySelector('.clear');
clear.addEventListener('click',(e)=> {
    displayValue = "";
    firstValue = "";
    operatorValue = "";
    previousOperation.textContent = "";
    currentOperation.textContent = "";
});

const result = document.querySelector(".result");
result.addEventListener("click",()=> {
    previousOperation.textContent += displayValue + "=";
    operate();
});
