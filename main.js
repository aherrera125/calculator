var currentNum = "";
var firstNum;
var SecondNum;
var typeOp;
var result;

function displayNumber(number) {
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
    document.getElementById("display").value = result.toString();
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
            number = document.getElementById("display").value;
            if (parseFloat(number) > 0) {
                document.getElementById("display").value = "-" + number.toString();
            } else {
                document.getElementById("display").value = number.toString().replace('-', '');
            }
            break;
    }
}

function showResult() {
    SecondNum = document.getElementById("display").value;
    switch (typeOp) {
        case "add":
            result = parseFloat(firstNum) + parseFloat(SecondNum);
            document.getElementById("display").value = result.toString();
            firstNum = "";
            break;
        case "less":
            result = parseFloat(firstNum) - parseFloat(SecondNum);
            document.getElementById("display").value = result.toString();
            firstNum = "";
            break;
        case "mult":
            result = parseFloat(firstNum) * parseFloat(SecondNum);
            document.getElementById("display").value = result.toString();
            firstNum = "";
            break;
        case "div":
            if (parseFloat(SecondNum) != 0) {
                result = parseFloat(firstNum) / parseFloat(SecondNum);
                document.getElementById("display").value = result.toString();
                firstNum = "";
            } else {
                alert("Connot divide by zero!");
                clearDisplay();
            }
            break;
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
    currentNum = "";
    firstNum = "";
    SecondNum = "";
}