// jq
let gnbLiA = $(".gnb > li > a"),
    aH = $(".sub li a").outerHeight()-3;// 39px

gnbLiA.click(function(){
    // Accrodian만들기
    let tg = $(this); //클릭된 요소를 변수 tg에 저장
    let subA = tg.next().find("a").length; //tg 다음요소의 하위에서 a 태그의 길이를 변수 subA에 저장

    $(".sub").css("height","0px"); //.sub 의 높이 0
    tg.next().css("height",aH*subA+"px"); //tg 다음요소의 높이를 변수 aH*subA 로 변경

    // toggle만들기01
    // $(this).next().toggleClass("on");

    // toggle만들기02
    // javascript: $(this).next().classList.contains("on")
    // if($(this).next().hasClass("on") !== true){
    //     $(this).next().addClass("on");
    // }else{
    //     $(this).next().removeClass("on");
    // }
});
