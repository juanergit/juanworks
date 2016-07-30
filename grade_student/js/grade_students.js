
var score = 101;
switch (true) {
    case  score <= 100 && score > 90 : //一等生的分数区间
        console.log(1);
        break;
    case score <= 90 && score > 80 : //二等生的分数区间
        console.log(2);
        break;
    case score <= 80 && score > 70 : //三等生的分数区间
        console.log(3);
        break;
    case score <= 70 && score > 60 : //四等生的分数区间
        console.log(4);
        break;
    case score <= 60 && score > 50 : //五等生的分数区间
        console.log(5);
        break;
    case score <= 50 && score > 40 : //六等生的分数区间
        console.log(6);
        break;
    case score <= 40 && score > 30 : //七等生的分数区间
        console.log(7);
        break;
    case score <= 30 && score > 20 : //八等生的分数区间
        console.log(8);
        break;
    case score <= 20 && score > 10 : //九等生的分数区间
        console.log(9);
        break;
    case score > 100 ||score < 0 : //不合法的分数区间
        console.log("不合法的分数区间");
        break;
    default :                         //十等生
        console.log(10);
}