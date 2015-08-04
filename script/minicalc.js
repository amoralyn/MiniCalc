var resultDisplay = document.getElementById('display');
var user_input1 = parseInt(document.getElementById('num1').value);
var user_input2 = parseInt(document.getElementById('num2').value);



function getInput1() {
    document.getElementById("display");
    ('display').innerHTML = parseInt(user_input1);
}

function getInput2() {
 var resultDisplay= document.getElementById("display");
    ('display').innerHTML = parseInt(user_input2);
}

function updateResultDisplay(operator){
if(operator == '+'){
  var resultDisplay = document.getElementById("display");
    ('display').innerHTML= '+';}
else if(operator == '-'){
  var resultDisplay = document.getElementById("display");
    ('display').innerHTML= '-';}
else if(operator == '*'){
  var resultDisplay = document.getElementById("display");
    ('display').innerHTML= '*';}
else if(operator == '/'){
  var resultDisplay = document.getElementById("display");
    ('display').innerHTML= '/';}
else if(operator == '%'){
  var resultDisplay = document.getElementById("display");
    ('display').innerHTML= '%';}
else if(operator == '^'){
  var resultDisplay = document.getElementById("display");
  ('display').innerHTML= '^';}
else if(operator == 'C'){
  var resultDisplay = document.getElementById("display");
  ('display').innerHTML= ' ';}
}

function compute() {
    var resultDisplay = document.getElementById("display");
    resultDisplay.value = eval(resultDisplay.value);
}




// function compute(operator, num1, num2){
// if(operator == '+'){return num1 + num2}
//   else if (operator == '-'){return parseInt(num1) - parseInt(num2)}
//   else if (operator == '*'){return parseInt(num1) * parseInt(num2)}
//   else if (operator == '/'){return parseInt(num1) / parseInt(num2)}
//   else if (operator == '%'){return parseInt(num1) % parseInt(num2)}
//   else if (operator == '^'){return parseInt(num1) ^ parseInt(num2)}
// }



