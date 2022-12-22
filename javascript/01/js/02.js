// 데이터형 활용
// 문자 자료형 string

// let x;
// let y;
let x, y;
x = 7+5;
y = "7"+5; 
// document.write(x+y);
document.write(x+"<br>"); // 12
document.write(y+"<br>"); // 7,5
document.write("y"); // y

// 자바스크립트에서 표현식을 작성할 때 문자는 따옴표로 묶고 변수나 숫자는 묶지 않음

const wakeup = "일어나"
document.write("<h1 style='color:green'>",wakeup,"</h1>");
document.write("<h1 style='color:green'>"+wakeup+"</h1>");

// es6에 추가된 템플릿 리터럴
// ``:  벡틱
document.write(`<h1 style='color:green'>${wakeup}</h1>`);