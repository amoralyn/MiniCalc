var operatorDisplay = document.getElementById('display');
var inputDisplay1 = document.getElementById('inputDisplay1');
var inputDisplay2 = document.getElementById('inputDisplay2');
var user_input1;
var user_input2;
var result;


function getInput1() {
  user_input1 = parseInt(document.getElementById('num1').value); 
  var inputDisplay1 = document.getElementById("inputDisplay1");
  inputDisplay1.innerHTML = user_input1;
  // user_input1 = inputDisplay1.innerHTML;
  console.log(user_input1, 'has been called');
 
}

function getInput2() {
  user_input2 = parseInt(document.getElementById('num2').value);
  var inputDisplay2= document.getElementById("inputDisplay2");
  inputDisplay2.innerHTML += user_input2;
  console.log(user_input2, 'has been called');
  // secondInput = inputDisplay2.innerHTML;
}

function updateResultDisplay(operator){
    if(operator == '+'){
      var  operatorDisplay = document.getElementById("operatorDisplay");
      operatorDisplay.innerHTML = '+';
      console.log(operator, " has been called!");
      result = user_input1 + user_input2;
      // console.log(user_input1);
      // console.log(user_input2);

    }
      

    else if(operator == '-'){
      var  operatorDisplay = document.getElementById("operatorDisplay");
      operatorDisplay.innerHTML = '-';
      console.log(operator, " has been called!");
      result = firstInput - secondInput;
    }

    else if(operator == '*'){
      var  operatorDisplay = document.getElementById("operatorDisplay");
      operatorDisplay.innerHTML = '*';
      console.log(operator, " has been called!");
      result = firstInput * secondInput;
    }

    else if(operator == '/'){
      var  operatorDisplay = document.getElementById("operatorDisplay");
      operatorDisplay.innerHTML = '/';
      console.log(operator, " has been called!");
      result = firstInput / secondInput;
    }

    else if(operator == '%'){
      var  operatorDisplay = document.getElementById("operatorDisplay");
      operatorDisplay.innerHTML = '%';
      console.log(operator, " has been called!");
      result = firstInput % secondInput;
    }

    else if(operator == '^'){
      var  operatorDisplay = document.getElementById("operatorDisplay");
      operatorDisplay.innerHTML += '^';
      console.log(operator, " has been called!");
      result = firstInput ^ secondInput;
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


// function compute() {
//     var  resultDisplay = document.getElementById("resultDisplay");
//     console.log(resultDisplay.value);
//     var FinalResultDisplay = document.getElementById("finalResultDisplay");
//     finalResultDisplay.innerHTML = /*'The result is ',*/ eval(resultDisplay.value);
//     console.log(eval(resultDisplay.value));
// }




function compute(){
  var finalResultDisplay = document.getElementById('finalResultDisplay');
  console.log(result);
  console.log('The result is ...', result);
  finalResultDisplay.innerHTML = result;
  // console.log(firstInput);
  // console.log(secondInput);
  // console.log(result);
  // var  operatorDisplay = document.getElementById("operatorDisplay");
  // console.log(user_input1);
  // console.log(operatorDisplay.innerHTML);
  // console.log(user_input2);
  // if(operatorDisplay.innerHTML == '+'){
  //   return user_input1+ user_input2
  // }
  //   else if (operatorDisplay.innerHTML == '-'){
  //     return user_input1- user_input2
  //   }
  //   else if (operatorDisplay.innerHTML == '*'){
  //     return user_input1* user_input2
  //   }
  //   else if (operatorDisplay.innerHTML == '/'){
  //     return user_input1/ user_input2
  //   }
  //   else if (operatorDisplay.innerHTML == '%'){
  //     return user_input1% user_input2
  //   }
  //   else if (operatorDisplay.innerHTML == '^'){
  //     return user_input1^ user_input2
  //   }
//   var  resultDisplay = document.getElementById("resultDisplay");
//   console.log(resultDisplay.value);
//   var FinalResultDisplay = document.getElementById("finalResultDisplay");
//   finalResultDisplay.innerHTML = /*'The result is ',*/ eval(resultDisplay.value);
//   console.log(eval(resultDisplay.value));
// }
}



