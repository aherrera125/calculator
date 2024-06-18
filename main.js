const nroOne = document.getElementById("nroOne");
const nroTwo = document.getElementById("nroTwo");
const nroThree = document.getElementById("nroThree");
const nroFour = document.getElementById("nroFour");
const nroFive = document.getElementById("nroFive");
const nroSix = document.getElementById("nroSix");
const nroSeven = document.getElementById("nroSeven");
const nroEigth = document.getElementById("nroEigth");
const nroNine = document.getElementById("nroNine");
const nroZero = document.getElementById("nroZero");
const add = document.getElementById("add");
const less = document.getElementById("less");
const mult = document.getElementById("mult");
const div = document.getElementById("div");
const changeSign = document.getElementById("changeSign");
const displayResult = document.getElementById("result");
const percentage = document.getElementById("percentage");
const clearC = document.getElementById("clearC");
const clearCE = document.getElementById("clearCE");

var display = document.getElementById("display");
var currentNum = "";
var firstNum;
var SecondNum;
var typeOp;
var result;

nroOne.addEventListener("click", ()=>{
    displayNumber('1');
})
nroTwo.addEventListener("click", ()=>{
    displayNumber('2');
})
nroThree.addEventListener("click", ()=>{
    displayNumber('3');
})
nroFour.addEventListener("click", ()=>{
    displayNumber('4');
})
nroFive.addEventListener("click", ()=>{
    displayNumber('5');
})
nroSix.addEventListener("click", ()=>{
    displayNumber('6');
})
nroSeven.addEventListener("click", ()=>{
    displayNumber('7');
})
nroEigth.addEventListener("click", ()=>{
    displayNumber('8');
})
nroNine.addEventListener("click", ()=>{
    displayNumber('9');
})
nroZero.addEventListener("click", ()=>{
    displayNumber('0');
})
add.addEventListener("click", ()=>{
    typeOperation('add');
})
less.addEventListener("click", ()=>{
    typeOperation('less');
})
mult.addEventListener("click", ()=>{
    typeOperation('mult');
})
div.addEventListener("click", ()=>{
    typeOperation('div');
})
changeSign.addEventListener("click", ()=>{
    typeOperation('changeSign');
})
displayResult.addEventListener("click", ()=>{
    showResult();
})
percentage.addEventListener("click",()=>{
    typeOperation("percentage");
})
clearC.addEventListener("click",()=>{
    clearDisplay();
})
clearCE.addEventListener("click",()=>{
    clearDisplay();
})

function displayNumber(number) {
    display.value = "";
    display.value = currentNum + number;
    currentNum = display.value;
}

function assignFirstNumber() {
    firstNum = display.value;
    display.value = "";
}

function assignSecondNumber(typeOp) {
    SecondNum = display.value;
    switch (typeOp) {
        case "add":
            result = parseFloat(firstNum) + parseFloat(SecondNum);
            firstNum = result.toString();
            break;
        case "less":
            result = parseFloat(firstNum) - parseFloat(SecondNum);
            firstNum = result.toString();
            break;
        case "mult":
            result = parseFloat(firstNum) * parseFloat(SecondNum);
            firstNum = result.toString();
            break;
        case "div":
            result = parseFloat(firstNum) / parseFloat(SecondNum);
            firstNum = result.toString();
            break;
        case "percentage":
            result = parseFloat(firstNum) * parseFloat(SecondNum) / 100;
            firstNum = "";
            break;
    }
    display.value = result.toString();
}

function typeOperation(operation) {
    let number;
    typeOp = operation;
    switch (typeOp) {
        case "add":
            if (!firstNum) {
                assignFirstNumber();
            } else {
                assignSecondNumber(typeOp);
            }
            currentNum = "";
            break;
        case "less":
            if (!firstNum) {
                assignFirstNumber();
            } else {
                assignSecondNumber(typeOp);
            }
            currentNum = "";
            break;
        case "mult":
            if (!firstNum) {
                assignFirstNumber();
            } else {
                assignSecondNumber(typeOp);
            }
            currentNum = "";
            break;
        case "div":
            if (!firstNum) {
                assignFirstNumber();
            } else {
                assignSecondNumber(typeOp);
            }
            currentNum = "";
            break;
        case "percentage":
            if (!firstNum) {
                assignFirstNumber();
            } else {
                assignSecondNumber(typeOp);
            }
            currentNum = "";
            break;
        case "changeSign":
            number = display.value;
            if (parseFloat(number) > 0) {
                display.value = "-" + number.toString();
            } else {
                display.value = number.toString().replace('-', '');
            }
            break;
    }
}

function showResult() {
    SecondNum = display.value;
    switch (typeOp) {
        case "add":
            result = parseFloat(firstNum) + parseFloat(SecondNum);
            display.value = result.toString();
            firstNum = "";
            break;
        case "less":
            result = parseFloat(firstNum) - parseFloat(SecondNum);
            display.value = result.toString();
            firstNum = "";
            break;
        case "mult":
            result = parseFloat(firstNum) * parseFloat(SecondNum);
            display.value = result.toString();
            firstNum = "";
            break;
        case "div":
            if (parseFloat(SecondNum) != 0) {
                result = parseFloat(firstNum) / parseFloat(SecondNum);
                display.value = result.toString();
                firstNum = "";
            } else {
                alert("Connot divide by zero!");
                clearDisplay();
            }
            break;
    }
}

function clearDisplay() {
    display.value = "";
    currentNum = "";
    firstNum = "";
    SecondNum = "";
}