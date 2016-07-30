var cVal = 0;//保存转换Number类型的值
var temp = 0; //保存第一次输入的值
var oper = '';//保存输入的操作符;
var inp = document.getElementById("resultIpt");
var iptVal = inp.value;
iptVal = '';
var flag = false;


var calculator = {
    //乘号、除号的转化
    operChange: function (input, num) {
        if (num == 1) {
            return '/';
        } else if (num == 2) {
            return "*";
        } else {
            return input.value;
        }
    },
    //角度转化弧度；
    toRadians: function (num) {
        return (num * Math.PI / 180)
    },
    //获取输入的值；
    inputNum: function (input) {
        if(flag==true){
            document.getElementById("resultIpt").value =  "";
            iptVal="";
            flag = false;
        }
        val = input.value;
        iptVal += val; //获得连续输入的值；
        document.getElementById("resultIpt").value = iptVal;
        cVal = parseFloat(iptVal);
    },
    //进行的+、-、*、/运算
    operation: function (num1, num2, oper) {
        var result = 0;
        switch (oper) {
            case '+':
                result =parseFloat((num1 + num2).toFixed(2));
                flag = true;
                break;
            case '-':
                result =parseFloat(( num1 - num2).toFixed(2));
                flag = true;
                break;
            case '*':
                result = parseFloat((num1 * num2).toFixed(2));
                flag = true;
                break;
            case '/':
                if(num2!=0){
                    result = parseFloat((num1 / num2).toFixed(2));
                    flag = true;
                }else{
                    alert("除数不能为0");
                    flag = true;
                    return;
                }

                break;
        }

        return result;
    },
    //退格
    back: function () {
        iptVal = iptVal + "";
        iptVal = iptVal.substring(0, iptVal.length - 1);
        cVal = iptVal;
        document.getElementById("resultIpt").value = iptVal;
    },
    //退格、全清、清屏
    elimi: function (input, num) {
        switch (num) {
            case -2:
                iptVal = '';
                cVal = '';
                break;
            case -3:
                iptVal = '0';
                break;
                cVal = '';
        }
        document.getElementById("resultIpt").value = iptVal;
        iptVal = '';
    },
    //sin、cos、tan、正负转、求倒数、百分比、求根
    handle: function (input, num) {
        switch (num) {
            case 1:
                iptVal =parseFloat(Math.sin(calculator.toRadians(iptVal)).toFixed(2));
                flag = true;
                break;
            case 2:
                iptVal =parseFloat( Math.cos(calculator.toRadians(iptVal)).toFixed(2));
                flag = true;
                break;
            case 3:
                iptVal = parseFloat(Math.tan(calculator.toRadians(iptVal)).toFixed(2));
                flag = true;
                break;
            case 4:
                iptVal = iptVal * (-1);
                flag = true;
                break;
            case 5:
                if (iptVal != 0) {
                    iptVal = parseFloat((1 / iptVal).toFixed(3));
                    flag = true;
                } else {
                    alert("除数不能为0");
                    flag = true;
                    return;
                }
                break;
            case 6:
                iptVal = parseFloat((iptVal / 100).toFixed(3));
                flag = true;
                break;
            case 7:
                iptVal = parseFloat(Math.sqrt(iptVal).toFixed(3));
                flag = true;
                break;
        }
        document.getElementById("resultIpt").value = iptVal;
        cVal = iptVal;
    },
    //第二个值的输入
    inputOper: function (input, num) {
        oper = calculator.operChange(input, num);
        switch (oper) {
            case '+':
                temp = parseFloat(cVal);//保存上次计算结果，并对字符串进行转换Number类型
                iptVal = '';   //第一次输入的值设置为空
                break;
            case '-':
                temp = parseFloat(cVal);
                iptVal = '';
                break;
            case '*':
                temp = parseFloat(cVal);
                iptVal = '';
                break;
            case'/':
                temp = parseFloat(cVal);
                iptVal = '';
                break;
        }

    },
    //计算结果
    equal: function (input) {

        if (input.value == "=") {
            if (oper != null && oper != '') {
                iptVal = calculator.operation(temp, cVal, oper);
                iptVal = parseFloat(iptVal);
                flag = true;
            } else {
                iptVal = praseFloat(cVal.toFixed(2));
            }
        }
        document.getElementById("resultIpt").value = iptVal;
        cVal = iptVal;

    }
};





