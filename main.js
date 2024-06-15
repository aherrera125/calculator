var currentNum = "";
var firstNum;
var SecondNum;
var typeOp;
var result;

function currentNumber(number) {
    document.getElementById("display").value = "";
    document.getElementById("display").value = currentNum + number;
    currentNum = document.getElementById("display").value;
}

function assignFirstNumber() {
    firstNum = document.getElementById("display").value;
    document.getElementById("display").value = "";
}

function assignSecondNumber(typeOp) {
    SecondNum = document.getElementById("display").value;
    switch (typeOp) {
        case "add":
            result = parseInt(firstNum) + parseInt(SecondNum);
            break;
        case "less":
            result = parseInt(firstNum) - parseInt(SecondNum);
            break;
        case "mult":
            result = parseInt(firstNum) * parseInt(SecondNum);
            break;
        case "div":
            result = parseInt(firstNum) / parseInt(SecondNum);
            break;
    }
    document.getElementById("display").value = result.toString();
    firstNum = result.toString();    
}

function typeOperation(operation) {
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
    }
}

function showResult() {
    SecondNum = document.getElementById("display").value;
    switch (typeOp) {
        case "add":
            result = parseInt(firstNum) + parseInt(SecondNum);
            document.getElementById("display").value = result.toString();
            firstNum = "";
            break;
        case "less":
            result = parseInt(firstNum) - parseInt(SecondNum);
            document.getElementById("display").value = result.toString();
            firstNum = "";
            break;
        case "mult":
            result = parseInt(firstNum) * parseInt(SecondNum);
            document.getElementById("display").value = result.toString();
            break;
        case "div":
            if (parseInt(firstNum) >= parseInt(SecondNum)) {
                result = parseInt(firstNum) / parseInt(SecondNum);
                document.getElementById("display").value = result.toString();
            } else {
                alert("First number should be more than second number");
            }
            break;
    }
}