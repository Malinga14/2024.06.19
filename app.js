function calc(){
    let number1 = new Number(document.getElementById("number1").value);
    let number2 = new Number(document.getElementById("number2").value);
    let op = document.getElementById("op").value;
    let output = document.getElementById("output");


    switch(op){
        case "+":
            output.innerHTML = number1 + number2;
            break;
        case "-":
            output.innerHTML = number1 - number2;
            break;
        case "*":
            output.innerHTML = number1 * number2;
            break;
        case "/":
            output.innerHTML = number1 / number2;
            break;
    }
}

function num0(){
    if(op!="null"){
        document.getElementById("number1").value = 0;
    }else if(op=="null"){ 
        document.getElementById("number2").value = 0;
    }
}
function num1(){
    document.getElementById("number1").value = 1;
}
function num2(){
    document.getElementById("number1").value = 2;
}
function num3(){
    document.getElementById("number1").value = 3;
}
function num4(){
    document.getElementById("number1").value = 4;
}
function num5(){
    document.getElementById("number1").value = 5;
}
function num6(){
    document.getElementById("number1").value = 6;
}
function num7(){
    document.getElementById("number1").value = 7;
}
function num8(){
    document.getElementById("number1").value = 8;
}
function num9(){
    document.getElementById("number1").value = 9;
}
function opPlus(){
    document.getElementById("op").value = "+";
}
function opMin(){
    document.getElementById("op").value = "-";
}
function opDiv(){
    document.getElementById("op").value = "/";
}
function opMul(){
    document.getElementById("op").value = "*";
}