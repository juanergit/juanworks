

var array = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
var array1 = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
var count = 1;
var elementArr = new Array(); //�������array�Ĳ��ظ���Ԫ��
var sum = new Array();//�������array��ÿ����ͬԪ�صĳ��ֵĴ���
for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
            count++;//���������뵱ǰ���Ԫ����ͬ�ĸ���
            array.splice(j, 1); //ÿ�ҵ�һ����ͬ��Ԫ�أ���Ҫ�����Ƴ�����
            j--;
        }

    }
    elementArr[i] = array[i];//����ǰ��Ԫ�ش��뵽elementArr������
    sum[i] = count;  //���ҽ��ж��ٸ���ǰ������Ԫ�صĸ�������sum������
    count = 1;  //�ٽ�count���¸�ֵ��������һ��Ԫ�ص��ж�
}

var newSum = new Array(); //  sum;
for (var i = 0; i < sum.length; i++) {
    newSum[i] = sum[i]
}
newSum.sort();
var first = ""; //���ִ������Ĵ�����
var index = "";//���ִ������������Ա��λ�ã�

for (var j = 0; j < sum.length; j++) {
    if (sum[j] == newSum[newSum.length - 1]) {
        first += "���ִ�������Ԫ����" + elementArr[j] + ",����Ϊ" + sum[j] + "<br/>";

        for (var i = 0; i < array1.length; i++) {
            if (array1[i] == elementArr[j]) {
                index += elementArr[j] + "���ֵ�λ��Ϊ" + i  + " ";

            }

        }
    }
}
document.write(first+index);

