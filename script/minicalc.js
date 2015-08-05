var operatorDisplay = document.getElementById('display');
var inputDisplay1 = document.getElementById('inputDisplay1');
var inputDisplay2 = document.getElementById('inputDisplay2');



function getInput1() {
  var user_input1 = parseInt(document.getElementById('num1').value); 
  var inputDisplay1 = document.getElementById("inputDisplay1");
  inputDisplay1.innerHTML = parseInt(user_input1);
  console.log(user_input1, 'has been called');
}

function getInput2() {
  var user_input2 = parseInt(document.getElementById('num2').value);
  var inputDisplay2= document.getElementById("inputDisplay2");
  inputDisplay2.innerHTML += parseInt(user_input2);
  console.log(user_input2, 'has been called');
}

function updateResultDisplay(operator){
    if(operator == '+'){
      var  operatorDisplay = document.getElementById("operatorDisplay");
      operatorDisplay.innerHTML = '+';
      console.log(operator, " has been called!");
    }

    else if(operator == '-'){
      var  operatorDisplay = document.getElementById("operatorDisplay");
      operatorDisplay.innerHTML += '-';
      console.log(operator, " has been called!");
    }

    else if(operator == '*'){
      var  operatorDisplay = document.getElementById("operatorDisplay");
      operatorDisplay.innerHTML += '*';
      console.log(operator, " has been called!");
    }

    else if(operator == '/'){
      var  operatorDisplay = document.getElementById("operatorDisplay");
      operatorDisplay.innerHTML += '/';
      console.log(operator, " has been called!");
    }

    else if(operator == '%'){
      var  operatorDisplay = document.getElementById("operatorDisplay");
      operatorDisplay.innerHTML += '%';
      console.log(operator, " has been called!");
    }

    else if(operator == '^'){
      var  operatorDisplay = document.getElementById("operatorDisplay");
      operatorDisplay.innerHTML += '^';
      console.log(operator, " has been called!");
    }

    else if(operator == 'C'){
      var  operatorDisplay = document.getElementById("operatorDisplay");
      operatorDisplay.innerHTML= ' ';
      var inputDisplay1 = document.getElementById("inputDisplay1");
      inputDisplay1.innerHTML = ' ';
      var inputDisplay2 = document.getElementById("inputDisplay2");
      inputDisplay2.innerHTML = ' ';
    }
}


function compute() {
    console.log("The result is ...");
    var  operatorDisplay = document.getElementById("operatorDisplay");
    var resultDisplay = document.getElementById("resultDisplay");
    resultDisplay.innerHTML = eval(operatorDisplay.value);
}




// function compute(operator, num1, num2){
// if(operator == '+'){return num1 + num2}
//   else if (operator == '-'){return parseInt(num1) - parseInt(num2)}
//   else if (operator == '*'){return parseInt(num1) * parseInt(num2)}
//   else if (operator == '/'){return parseInt(num1) / parseInt(num2)}
//   else if (operator == '%'){return parseInt(num1) % parseInt(num2)}
//   else if (operator == '^'){return parseInt(num1) ^ parseInt(num2)}
// }



