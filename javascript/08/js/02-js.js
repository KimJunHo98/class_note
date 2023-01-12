// js
const textZone = document.querySelector("#textZone"),
    btn1 = document.querySelector("#btn1"),
    btn2 = document.querySelector("#btn2"),
    btn3 = document.querySelector("#btn3"),
    listWrap = document.querySelector("#listWrap"),
    list1 = document.querySelector(".list1");

btn1.onclick = function(){
    textZone.style.color = "red";
    textZone.classList.add("blue");
};

btn2.onmouseover = function(){
    textZone.style.backgroundColor = "yellow";
};
btn2.onfocus = function(){
    textZone.style.backgroundColor = "green";
};

function textZone4(){
    textZone.style.color = "pink";
    textZone.style.fontSize = "2em";
};

// property listener 로 이벤트 등록시 같은 이벤트 덮어씌워짐
// btn3.onmouseover = textZone4;
// btn3.onfocus = textZone4;
// btn3.onclick = function(){
//     alert("click");
// };
// btn3.onclick = function(){
//     textZone.style.marginLeft = "80px";
// };

// 두개이상의 이벤트를 등록시킬때
btn3.addEventListener("click", function(){
    alert("click");
});
btn3.addEventListener("click", function(){
    textZone.style.marginLeft = "80px";
});

listWrap.addEventListener("mouseenter", function(){
    list1.style.display = "block";
});
listWrap.addEventListener("mouseleave", function(){
    list1.style.display = "none";
});

let hover = document.querySelector(".hover");

hover.addEventListener("mouseenter", function(){
    this.style.color = "aqua"; 
    console.log(this); // .hover
});
hover.addEventListener("mouseleave", function(){
    this.style.color = "red";
});

// 이벤트를 화살표 함수로 작성시 this는 객체 자신이 아닌 윈도우를 가르킴
// hover.addEventListener("mouseenter", ()=>{
    //     this.style.color = "aqua";
    //     console.log(this); // window
// });


