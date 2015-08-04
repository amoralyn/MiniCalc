var box = document.getElementById('display');
var user_input1 = parseInt(document.getElementById('num1').value);
var user_input2 = parseInt(document.getElementById('num2').value);



function input1() {
    var display = document.getElementById("display");
    display.value += parseInt(user_input);
}

function input2() {
    var display = document.getElementById("display");
    display.value += parseInt(user_input2);
}

function add() {
    var display = document.getElementById("display");
    display.value += "+";
}

function take() {
    var display = document.getElementById("display");
    display.value += "-";
}

function times() {
    var display = document.getElementById("display");
    display.value += "*";
}

function div() {
    var display = document.getElementById("display");
    display.value += "/";
}

function mod() {
    var display = document.getElementById("display");
    display.value += "%";
}

function power() {
    var display = document.getElementById("display");
    display.value += "^";
}

function clear() {
    var display = document.getElementById("display");
    display.value += " ";
}

function compute() {
    var display = document.getElementById("display");
    display.value = eval(display.value);
}

// function compute(operator, num1, num2){
// if(operator == '+'){return num1 + num2}
//   else if (operator == '-'){return parseInt(num1) - parseInt(num2)}
//   else if (operator == '*'){return parseInt(num1) * parseInt(num2)}
//   else if (operator == '/'){return parseInt(num1) / parseInt(num2)}
//   else if (operator == '%'){return parseInt(num1) % parseInt(num2)}
//   else if (operator == '^'){return parseInt(num1) ^ parseInt(num2)}
// }



