var number = document.getElementById("number");

onfocus()
function onfocus(){
    number.focus()
}

number.addEventListener("keypress",function(e){
    console.log(e.keyCode)
    if(e.keyCode>=48 && e.keyCode<=57){ // 0 to 9
        SetNum(e.key)
    }
    else if(e.keyCode==43){
        SetNum("+")
    }
    else if(e.keyCode==45){
        SetNum("-")
    }
    else if(e.keyCode==42){
        SetNum("*")
    }
    else if(e.keyCode==47){
        SetNum("/")
    }
    else if(e.keyCode==13){
        equalResult()
    }
    
})

number.addEventListener("keydown",function(e){
    if(e.keyCode==8){
        backSpace()
    }
})

function SetNum(numb) {
    var lastNumber = number.value.toString().slice(number.value.length - 1);

    if (number.value.length == 0) {
        if (numb == "*" || numb == "/") {
            alert("bha start ma * ya / nhi ho sakat");
        }
        else{
              number.value += numb
        }
    }
    else if (lastNumber == "+" || lastNumber == "-" || lastNumber == "*" || lastNumber == "/" || lastNumber == "%") {
        if (numb == "+" || numb == "-" || numb == "*" || numb == "/" || numb == "%") {
            alert("please enter correct data");
        }
        else {
            number.value += numb
        }
    }
    else {
        number.value += numb
    }
}

function backSpace() {
    number.value = number.value.toString().substring(0, number.value.length-1);
}

function clearAll(){
    number.value = ""
}

function equalResult() {
    var lastNumber = number.value.toString().slice(number.value.length - 1)
    if (lastNumber == "+" || lastNumber == "-" || lastNumber == "*" || lastNumber == "/" || lastNumber == "%") {
        alert("bhai last ma operator nhi ho sakta");
    }
    else {
        number.value = eval(number.value);
    }
}

function Square(){
    number.value = number.value*number.value;
}

function Percentage(){

    SetNum("%")
    //20 + 10%
    var numb1 = number.value.split("+");
    //20,10%
    var numb2 = numb1[1].replace("%","");
    //10
    var numb3 = numb2/100;
    //0.1
    var final = numb1[0]*numb3;
    number.value = final.toFixed(1);

}

function SquareRoot(){
    number.value = Math.sqrt(number.value);
}

function AddMinusAdd(){
    if(number.value.length>0){
        if(number.value[0]=="-"){
            //Remove Minus
            number.value = number.value.toString().substring(1,number.value.length);
        }
        else{
            //Add Minus
            number.value = "-" + number.value.toString().substring(0,number.value.length);
        }
    }
    var numb = number.value[0]
}
