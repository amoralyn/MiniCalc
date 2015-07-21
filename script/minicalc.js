var box = document.getElementById('display');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');

// function addtoscreen(x){

// //   box.value += x;
// //   if (x=='C'){

// //     box.value = '';
// //   }
// // }

// // function answer(){
// //   x= box.value;
// //   x= eval(x);
// //   box.value=x;
// }



function addtoscreen(x)
{
  var user_input = num1.value;
  var user_input1 = num2.value;
  // box.value = user_input + x + user_input1;
  // var new_number = user_input + x;
  var result = document.getElementById('display');
  result.value = box.value;

  if(x == 'C'){
    box.value = '';
  }
  // else if (x == '+') {
  //   box.value = parseInt(user_input) + parseInt(user_input1)
  // }else if (x == '-') {
  //   box.value = parseInt(user_input) - parseInt(user_input1)
  // }else if (x == '*') {
  //   box.value = parseInt(user_input) * parseInt(user_input1)
  // }else if (x == '/') {
  //   box.value = parseInt(user_input) / parseInt(user_input1)
  // }else if (x == '%') {
  //   box.value = parseInt(user_input) % parseInt(user_input1)
  // }else if (x == '^') {
  //   box.value = parseInt(user_input) ^ parseInt(user_input1)
  // }






  box.innerHTML = box.innerHTML + x ;

  
}





function answer(x)
{

  var user_input =  parseInt(num1.value);
  var user_input1 = parseInt(num2.value);
  // box.value = user_input;

function addition(){
  var user_input = num1.value;
  var user_input1 = num2.value;
document.getElementById("display").innerHTML = user_input + " + " + user_input1 +  " = " + (parseInt(user_input) + parseInt(user_input1));
}
function subtraction(){
  var user_input = num1.value;
  var user_input1 = num2.value;
document.getElementById("display").innerHTML = user_input + " - " + user_input1 +  " = " + (parseInt(user_input) - parseInt(user_input1));

}

function division(){
  var user_input = num1.value;
  var user_input1 = num2.value;
document.getElementById("display").innerHTML = user_input + " / " + user_input1 +  " = " + (parseInt(user_input) / parseInt(user_input1));

}

function multiplication(){
  var user_input = num1.value;
  var user_input1 = num2.value;
document.getElementById("display").innerHTML = user_input + " * " + user_input1 +  " = " + (parseInt(user_input) * parseInt(user_input1));

}

function modulus(){
  var user_input = num1.value;
  var user_input1 = num2.value;
document.getElementById("display").innerHTML = user_input + " % " + user_input1 +  " = " + (parseInt(user_input) % parseInt(user_input1));

}
function power(){
  var user_input = num1.value;
  var user_input1 = num2.value;
document.getElementById("display").innerHTML = user_input + " ^ " + user_input1 +  " = " + Math.pow(parseInt(user_input), parseInt(user_input1));

}
  // var new_number = user_input + x;
  // var new_number1 = new_number + user_input1;
 result = user_input + x + user_input1;
  console.log(user_input);
  console.log(user_input1);
  console.log(box.value);
  
  // console.log(new_number);
  // console.log(new_number1);
  // var resultString = num2.value +" = " + result;
    addtoscreen(result);
  console.log(result);

