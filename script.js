function add(a,b) {
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

function operate() {

        switch (operatorValue) {
            case "+":
                 return add(parseFloat(firstValue),parseFloat(displayValue));
                // break;
            case "-":
                return subtract(parseFloat(firstValue),parseFloat(displayValue))
                // break;
            case "x":
                return multiply(parseFloat(firstValue),parseFloat(displayValue))
                // break;
            case "÷":
                return divide(parseFloat(firstValue),parseFloat(displayValue))
                // break;
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
    if(operatorValue === "÷" && displayValue === "0"){
        currentOperation.textContent = "bruh";
        previousOperation.textContent ="bruh";
    }
    else if (previousOperation.textContent === "") {
        operatorValue = operator.target.value;
        previousOperation.textContent = currentOperation.textContent + operatorValue;
        firstValue = displayValue;
        displayValue = "";
        currentOperation.textContent = "";
    }
    else if(firstValue !== ""){
        console.log(firstValue);
        console.log(displayValue);
        console.log(operate());
        firstValue = operate();
        previousOperation.textContent = firstValue + operatorValue;
        currentOperation.textContent = ""
        displayValue = "";
        operatorValue = operator.target.value;
    }
}));

const backspace = document.querySelector(".backspace");

function removeDisplay(e){
    let removed = displayValue.substring(0,displayValue.length-1);
    displayValue = removed;
    currentOperation.textContent = removed;
}
backspace.addEventListener('click',removeDisplay);

function addDisplay(e) {

    if (displayValue.includes(".")) {
        const decimal = document.querySelector(".digit.decimal");
        decimal.disabled = true;
    }
    currentOperation.textContent += e.target.textContent;
    displayValue += e.target.textContent;
}
const digits = document.querySelectorAll(".digit.number");

digits.forEach((digit)=> digit.addEventListener('click',addDisplay));

function addDisplayKey(e) {
    let pattern = /[0-9]/g;
    if (displayValue.includes(".")) {
        const decimal = document.querySelector(".digit.decimal");
        decimal.disabled = true;
    }
    if (pattern.test(e.key)) {
        currentOperation.textContent += e.key;  
        displayValue += e.key;  
    }
}

document.addEventListener('keydown',addDisplayKey);



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
    if(operatorValue === "÷" && displayValue === "0"){
        currentOperation.textContent = "bruh";
        previousOperation.textContent ="bruh";
    }
    else{
        previousOperation.textContent = operate();
        currentOperation.textContent = operate();
        firstValue = "";
        displayValue = "";
        operatorValue = "";
    }

});
