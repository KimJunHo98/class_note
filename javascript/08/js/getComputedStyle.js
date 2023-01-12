// getComputedStyle: 윈도우 개발자모드의 Computed속성을 얻어옴
// getPropertyValue: 속성 값 얻어오기
// get: 읽기 전용, set: 쓰기 전용
const container = document.querySelector(".container"),
    child = document.querySelector(".child"),
    containerW = container.clientWidth;

    console.log("container의 clientWidth:", containerW);
    
let childStyle = Number(window.getComputedStyle(child).getPropertyValue("padding-left").split("px",1)[0]); // px 문자 기준으로 1개 잘라내고 0번째 요소 취득함
const calc = containerW-childStyle;

child.style.width = calc;
console.log(calc);

let pseudo = window.getComputedStyle(child,":before").content;
console.log(pseudo);
