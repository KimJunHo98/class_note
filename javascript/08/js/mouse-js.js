// const cursor = document.getElementById("cursor"),
//     cStyle = window.getComputedStyle(cursor),
//     m1 = document.querySelector("#m1"),
//     m2 = document.querySelector("#m2");
// 
// // let imgs = [document.getElementById("m1"), document.getElementById("m2"), document.getElementById("m3")];
// 
// window.addEventListener("mousemove",function(event){
// // 마우스가 움질일 때 포인터의 좌표값 얻어서 좌표를 DOM요소에 할당
// let pointer = event,
//     cSize = [cStyle.width.split("px",1), cStyle.height.split("px",1)],
//     // x = pointer.clientX; 
//     // y = pointer.clientY;
//     cXY = [pointer.clientX, pointer.clientY], // 배열
//     cObj = {x:pointer.clientX+"px", y:pointer.clientY+"px"}, // 객체
//     cObj2 = {x:pointer.clientX+50+"px", y:pointer.clientY+50+"px"};
//     
// cursor.style.left = cXY[0]+"px";
// cursor.style.top = cXY[1]+"px";
// 
// cursor.style.marginLeft = -(cSize[0]/2)+"px";
// cursor.style.marginTop = -(cSize[1]/2)+"px";
// 
// m1.style.top = cObj.y
// m1.style.left = cObj.x
// m2.style.top = cObj2.y
// m2.style.left = cObj2.x
// });

window.addEventListener("mousemove", function(e){
    const cursor = document.getElementById("cursor"),
        cStyle = window.getComputedStyle(cursor);

    let pointer = e,
        cSize = [cStyle.width.split("px",1), cStyle.height.split("px",1)],
        x = pointer.clientX,
        y = pointer.clientY;

    cursor.style.top = y+"px";
    cursor.style.left = x+"px";
    cursor.style.marginLeft = -(cSize[0]/2)+"px";
    cursor.style.marginTop = -(cSize[1]/2)+"px";
    document.getElementById("m1").style.top = y/2+"px";
    document.getElementById("m1").style.left = x/2+"px";
});

document.querySelector("p").addEventListener("mouseover", function(){
    document.getElementById("m3").classList.add("on");
});