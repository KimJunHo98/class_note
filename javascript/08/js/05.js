// js
// const section = document.querySelector("section"),
//     progressBar = document.querySelector(".progress .bar"),
//     txt = document.querySelector(".progress .txt"),
//     windowHeight = window.innerHeight; // 화면 높이
// let scrollTop; // 스크롤 양

// window.addEventListener("scroll", function(){
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
    
//     // 퍼센트 구하기 (부분/전체)*100
//     let scrollHeight = section.clientHeight, //문서 높이
//         scrollRealHeight = scrollHeight-windowHeight, // 문서높이 - 화면높이 = 스크롤 양
//         scrollPercent = parseInt((scrollTop/scrollRealHeight)*100);
    
//         console.log(scrollPercent);
//     // txt.textContent = Math.floor(scrollPercent)+"%";
//     txt.textContent = scrollPercent+"%"; // 퍼센트 표시
//     progressBar.style.width = scrollPercent+"%"; // 바 표시
// });

const section = document.querySelector("section"), // 스크롤 할 문서
    windowHeight = window.innerHeight; // 사용자 화면의 높이

let txt = document.querySelector(".progress .txt"),
    progressBar = document.querySelector(".progress .bar"),
    scrollTop; // 스크롤 양

// 퍼센트 구하기
function getPercent(scrollTop){ // scrollTop를 전달받음
    let scrollHeight = section.clientHeight, // 문서의 높이
        scrollRealHeight = scrollHeight-windowHeight,
        scrollPercent = parseInt((scrollTop/scrollRealHeight)*100+"%"); // 퍼센트 구하기 (부분/전체)*100
    if(scrollPercent >= 100){
        scrollPercent = 100;
    }

    render(scrollPercent); // render 호출하기
};

// 출력
function render(scrollPercent){ // scrollPercent를 전달받음
    txt.textContent = scrollPercent+"%";
    progressBar.style.width = scrollPercent+"%";
};

window.addEventListener("scroll", function(){
    scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;

    getPercent(scrollTop); // getPercent 호출하기
});