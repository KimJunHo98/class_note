// var x; // 변수를 선언
var x = 10; // 변수를 초기화
function dispaly(){
    console.log("x is"+x);
    console.log("y is"+y);
    var y = 10;
}
var y = 20;
console.log(y);
dispaly();

Exam1(); // 호출x
Exam(); //B
var Exam1 = function(){
    alert("A");
}

function Exam(){
    alert("B");
}
Exam(); // A

// var과 선언적함수, 익명함수는 호이스팅 발생