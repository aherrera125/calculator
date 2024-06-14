var number;
var number1;
var number2;
var flag;
var result;

function numberZero() {
    number = document.getElementById("display").value;
    document.getElementById("display").value = number + 0;
}

function numberOne() {
    number = document.getElementById("display").value;
    document.getElementById("display").value = number + 1;
}

function numberTwo() {
    number = document.getElementById("display").value;
    document.getElementById("display").value = number + 2;
}

function numberThree() {
    number = document.getElementById("display").value;
    document.getElementById("display").value = number + 3;
}

function numberFour() {
    number = document.getElementById("display").value;
    document.getElementById("display").value = number + 4;
}

function numberFive() {
    number = document.getElementById("display").value;
    document.getElementById("display").value = number + 5;
}

function numberSix() {
    number = document.getElementById("display").value;
    document.getElementById("display").value = number + 6;
}

function numberSeven() {
    number = document.getElementById("display").value;
    document.getElementById("display").value = number + 7;
}

function numberEigth() {
    number = document.getElementById("display").value;
    document.getElementById("display").value = number + 8;
}

function numberNine() {
    number = document.getElementById("display").value;
    document.getElementById("display").value = number + 9;
}

function add() {
    flag = "add";    
    number1 = document.getElementById("display").value;
    document.getElementById("display").value = "";

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

function result() {
    number2 = document.getElementById("display").value;
    switch (flag) {
        case "add":
            result = parseInt(number1) + parseInt(number2);
            document.getElementById("display").value = result.toString();
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

function clear() {
    document.getElementById("display").value = "";
    //document.getElementById("display").value = number;
}