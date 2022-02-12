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
function operate(n1,operator,n2) {
    switch (operator) {
        case "+":
             add(n1,n2)
            break;
        case "-":
            subtract(n1,n2)
            break;
        case "x":
            multiply(n1,n2)
            break;
        case "÷":
            divide(n1,n2)
            break;
    }
}
const display = document.querySelector("#display-text");
function addDisplay(e) {
    display.textContent += e.target.textContent;
}

const digits = document.querySelectorAll(".digit");
digits.forEach((digit)=> digit.addEventListener('click',addDisplay));



const clear = document.querySelector('.clear');

clear.addEventListener('click',(e)=> {
    display.textContent = "";
});
