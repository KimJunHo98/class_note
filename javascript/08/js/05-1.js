// jq
const section = $("section"), // 스크롤 할 문서
    windowHeight = $(window).height(); // 사용자 화면의 높이

let txt = $(".progress .txt"),
    progressBar = $(".progress .bar"),
    scrollTop; // 스크롤 양

// 퍼센트 구하기
function getPercent(sct){ // scrollTop을 매개변수 sct로 전달받음
    let scrollHeight = section.height(), // 문서의 높이
        scrollRealHeight = scrollHeight-windowHeight,
        scrollPercent = parseInt((sct/scrollRealHeight)*100+"%"); // 퍼센트 구하기 (부분/전체)*100

        if(scrollPercent >= 100){
            scrollPercent = 100;
        }

    render(scrollPercent); // render 호출하기
};

// 출력
function render(scrollPercent){ // scrollPercent를 전달받음
    txt.text(scrollPercent+"%");
    progressBar.css("width",scrollPercent+"%");
};

// 스크롤 양 얻기
$(window).scroll(function(){
    scrollTop = $(this).scrollTop();

    getPercent(scrollTop); // getPercent 호출하기
});