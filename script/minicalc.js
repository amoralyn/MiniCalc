var operatorDisplay = document.getElementById('display');
var inputDisplay1 = document.getElementById('inputDisplay1');
var inputDisplay2 = document.getElementById('inputDisplay2');



function getInput1() {
  console.log(user_input1, 'has been called');
  var user_input1 = parseInt(document.getElementById('num1').value); 
  var inputDisplay1 = document.getElementById("inputDisplay1");
  inputDisplay1.innerHTML = parseInt(user_input1);
}

function getInput2() {
  console.log("I'm working fine!");
  var user_input2 = parseInt(document.getElementById('num2').value);
  var inputDisplay2= document.getElementById("inputDisplay2");
  inputDisplay2.innerHTML += parseInt(user_input2);
}

function updateResultDisplay(operator){
    if(operator == '+'){
      var  operatorDisplay = document.getElementById("operatorDisplay");
       operatorDisplay.innerHTML = '+';
    }

    else if(operator == '-'){
      var  operatorDisplay = document.getElementById("operatorDisplay");
       operatorDisplay.innerHTML += '-';
    }

    else if(operator == '*'){
      console.log(operator, " has been called!");
      var  operatorDisplay = document.getElementById("operatorDisplay");
       operatorDisplay.innerHTML += '*';
    }

    else if(operator == '/'){
      var  operatorDisplay = document.getElementById("operatorDisplay");
      operatorDisplay.innerHTML += '/';
    }

    else if(operator == '%'){
      var  operatorDisplay = document.getElementById("operatorDisplay");
       operatorDisplay.innerHTML += '%';
    }

    else if(operator == '^'){
      var  operatorDisplay = document.getElementById("operatorDisplay");
       operatorDisplay.innerHTML += '^';
    }

    else if(operator == 'C'){
      var  operatorDisplay = document.getElementById("operatorDisplay");
       operatorDisplay.innerHTML= ' ';
    }
}

function compute() {
    console.log("The result is ...");
    var resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.value.innerHTML = eval(operatorDisplay.value);
}




// function compute(operator, num1, num2){
// if(operator == '+'){return num1 + num2}
//   else if (operator == '-'){return parseInt(num1) - parseInt(num2)}
//   else if (operator == '*'){return parseInt(num1) * parseInt(num2)}
//   else if (operator == '/'){return parseInt(num1) / parseInt(num2)}
//   else if (operator == '%'){return parseInt(num1) % parseInt(num2)}
//   else if (operator == '^'){return parseInt(num1) ^ parseInt(num2)}
// }



