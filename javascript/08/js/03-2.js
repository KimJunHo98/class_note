let gnbLiA = $(".gnb>li>a");
let aH = $(".sub>li>a").outerHeight()-3;

gnbLiA.click(function(){
    let tg = $(this),
        subA = tg.next().find("a").length;

    $(".sub").css("height","0px");
    tg.next().css("height",aH*subA+"px");
});