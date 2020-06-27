function getNumber(num){
    console.log(num);
     var result = document.getElementById("result");
     result.value += num;
       
}
function clearResult(){
    var result = document.getElementById("result");
    result.value = ""

}
function clearValue (){
  var result = document.getElementById("result");
  result.value = result.value.slice(0,-1); 
  
}
function getResult (){
    var result = document.getElementById("result");
    console.log(result.value);
    result.value = eval(result.value);
    console.log(result.value);

}
function signNumber (){

    var result = document.getElementById("result");
    result.value = result.value*-1;
    console.log(result.value);
    
}

function squareRoot(){
    var result = document.getElementById("result");
    result.value = Math.sqrt(result.value);
    console.log(result.value);
    
}

function square(){
    var result = document.getElementById("result");
    result.value = Math.pow(result.value,2);
    console.log(result.value);
    
}

function reciprocal(){
    var result = document.getElementById("result");
    result.value = 1/result.value;
    console.log(result.value);

}

// function Sin(){
//     var result = document.getElementById("result");
//     result.value = Math.sin(result.value);
//     console.log(result.value);
    
// }

// function Cos(){
//     var result = document.getElementById("result");
//     result.value = Math.cos(result.value);
//     console.log(result.value);
    
// }
// function Tan(){
//     var result = document.getElementById("result");
//     result.value = Math.tan(result.value);
//     console.log(result.value);
    
// }
// function logarithm(){
//     var result = document.getElementById("result");
//     result.value = Math.log(result.value);
//     console.log(result.value);
    
// }

