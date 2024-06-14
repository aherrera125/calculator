var number = "";
var number1;
var number2;
var flag;
var result;

function numberOne() {
    document.getElementById("display").value = "";
    document.getElementById("display").value = number + "1";
}

function numberTwo() {
    document.getElementById("display").value = "";
    document.getElementById("display").value = number + "2";
}

function numberThree() {
    document.getElementById("display").value = "";
    document.getElementById("display").value = number + "3";
}

function numberFour() {
    document.getElementById("display").value = "";
    document.getElementById("display").value = number + "4";
}

function numberFive() {
    document.getElementById("display").value = "";
    document.getElementById("display").value = number + "5";
}

function numberSix() {
    document.getElementById("display").value = "";
    document.getElementById("display").value = number + "6";
}

function numberSeven() {
    document.getElementById("display").value = "";
    document.getElementById("display").value = number + "7";
}

function numberEigth() {
    document.getElementById("display").value = "";
    document.getElementById("display").value = number + "8";
}

function numberNine() {
    document.getElementById("display").value = "";
    document.getElementById("display").value = number + "9";
}

function numberZero() {
    document.getElementById("display").value = "";
    document.getElementById("display").value = number + "0";
}

function add() {    
    flag = "add";
    if (!number1) {
        number1 = document.getElementById("display").value;
        document.getElementById("display").value = "";
    } else {
        number2 = document.getElementById("display").value;
        result = parseInt(number1) + parseInt(number2);        
        document.getElementById("display").value = result.toString();
        number1 = result.toString();
    }
}

function less() {
    flag = "less";
    number1 = document.getElementById("display").value;
    document.getElementById("display").value = "";
}

function mult() {
    flag = "mult";
    number1 = document.getElementById("display").value;
    document.getElementById("display").value = "";
}

function div() {
    flag = "div";
    number1 = document.getElementById("display").value;
    document.getElementById("display").value = "";
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function showResult() {    
    number2 = document.getElementById("display").value;
    switch (flag) {
        case "add":
            result = parseInt(number1) + parseInt(number2);
            document.getElementById("display").value = result.toString();
            number1 = "";
            break;
        case "less":
            result = parseInt(number1) - parseInt(number2);
            document.getElementById("display").value = result.toString();
            break;
        case "mult":
            result = parseInt(number1) * parseInt(number2);
            document.getElementById("display").value = result.toString();
            break;
        case "div":
            if (parseInt(number1) >= parseInt(number2)) {
                result = parseInt(number1) / parseInt(number2);
                document.getElementById("display").value = result.toString();
            } else {
                alert("First number should be more than second number");
            }
            break;
    }
}