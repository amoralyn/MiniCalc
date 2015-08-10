var operatorDisplay = document.getElementById('operatorDisplay');
var inputDisplay1 = document.getElementById('inputDisplay1');
var inputDisplay2 = document.getElementById('inputDisplay2');
var user_input1;
var user_input2;
var operators;
var result;


function getInput1() {
  user_input1 = parseInt(document.getElementById('num1').value); 
  inputDisplay1.innerHTML = user_input1;
}

function getInput2() {
  user_input2 = parseInt(document.getElementById('num2').value);
  inputDisplay2.innerHTML += user_input2;
}

function updateResultDisplay(operator){
    if(operator == '+'){
      operatorDisplay.innerHTML = '+';
    }
    
    else if(operator == '-'){
      operatorDisplay.innerHTML = '-';
    }

    else if(operator == '*'){
      operatorDisplay.innerHTML = '*';
    }

    else if(operator == '/'){
      operatorDisplay.innerHTML = '/';
    }

    else if(operator == '%'){
      operatorDisplay.innerHTML = '%';
    }

    else if(operator == '^'){
      operatorDisplay.innerHTML = '^';
    }

    else if(operator == 'C'){
      operatorDisplay.innerHTML= ' ';
      inputDisplay1.innerHTML = ' ';
      inputDisplay2.innerHTML = ' ';
    }
    operators = operatorDisplay.innerHTML;

    

}

function compute(){
  var finalResultDisplay = document.getElementById('finalResultDisplay');
  if(operators == '+'){
  result = user_input1 + user_input2
  }
  else if(operators == '-'){
    result = user_input1 - user_input2
  }
  else if(operators == '*'){
    result = user_input1 * user_input2
  }
  else if(operators == '/'){
    result = user_input1 / user_input2
  }
  else if(operators == '%'){
    result = user_input1 % user_input2
  }
  else if(operators == '^'){
    result = user_input1 ^ user_input2
  }
  else {
    result = 'select an operator';
  }
  finalResultDisplay.innerHTML = 'The result of ' + user_input1 + operators + user_input2 + ' is ' + result;
  

}