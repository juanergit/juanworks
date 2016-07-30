

var array = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
var array1 = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
var count = 1;
var elementArr = new Array(); //存放数组array的不重复的元素
var sum = new Array();//存放数组array中每个不同元素的出现的次数
for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
            count++;//用来计算与当前这个元素相同的个数
            array.splice(j, 1); //每找到一个相同的元素，就要把它移除掉，
            j--;
        }

    }
    elementArr[i] = array[i];//将当前的元素存入到elementArr数组中
    sum[i] = count;  //并且将有多少个当前这样的元素的个数存入sum数组中
    count = 1;  //再将count重新赋值，进入下一个元素的判断
}

var newSum = new Array(); //  sum;
for (var i = 0; i < sum.length; i++) {
    newSum[i] = sum[i]
}
newSum.sort();
var first = ""; //出现次数最多的次数；
var index = "";//出现次数最多的数组成员的位置；

for (var j = 0; j < sum.length; j++) {
    if (sum[j] == newSum[newSum.length - 1]) {
        first += "出现次数最多的元素是" + elementArr[j] + ",次数为" + sum[j] + "<br/>";

        for (var i = 0; i < array1.length; i++) {
            if (array1[i] == elementArr[j]) {
                index += elementArr[j] + "出现的位置为" + i  + " ";

            }

        }
    }
}
document.write(first+index);

