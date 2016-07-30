function calculator() {
    var firstNum = parseFloat(document.getElementById("the_first_num").value);
    var secondNum =parseFloat(document.getElementById("the_second_num").value);
    var operator = document.getElementById("operator").value;
    var result;
    if (operator == "+") {
        result = firstNum + secondNum;
    } else if (operator == "-") {
        result = firstNum - secondNum;
    } else if (operator == "*") {
        result =firstNum * secondNum ;
    } else {
        result = firstNum / secondNum;
    }
    document.getElementById("result").value = result.toFixed(2);
}



