var number = document.getElementById("number");

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