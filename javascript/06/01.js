document.getElementById("one").style.backgroundColor="yellow";
var el2 = document.getElementsByTagName("li");
var el3 = document.getElementsByTagName("ul");
var el4 = document.getElementsByClassName("highlight");
var el5 = document.querySelector(".highlight"); // 요소중에 첫번째 요소 하나만 선택
var el6 = document.querySelectorAll(".highlight"); // 포함된 요소 전부를 선택
el5.style.color="red";
// el6.style.color="orange";

for(let k=0; k<el6.length; k++){
    el6[k].style.color="orange";
}

for(a of el6){
    a.style.backgroundColor="black";
}
// el6.forEach(function(b){
//     b.style.fontSize="24px";
// });
el6.forEach((b)=>{
    b.style.fontSize="24px";
});

el4[1].style.cssText="width:500px; margin:0 auto; background-color:pink;" // css속성 여러개를 사용할 수 있지만 추가x, css속성이 수정된다

// el2[1].style.background="url(http://qwerew.cafe24.com/example/javascript/chicken.png) no-repeat 0 0/20px"; // 배열로 선택
// el2[2].style.backgroundColor="green";

for(let i=0; i<el2.length-3; i++){
    el2[i].style.background="url(http://qwerew.cafe24.com/example/javascript/chicken.png) no-repeat 0 0/20px"; //for문으로 반복
}
// 반복은 함수로, 바뀌는 곳은 변수로 처리

// for(var i of el3){
//     i.style.backgroundColor="skyblue";
// }

