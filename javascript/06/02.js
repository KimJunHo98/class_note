$(function(){
	$("#one").css("background", "yellow");
    var el1=$("#one");  //id를 변수에 저장
    el1.css("color", "blue");  //변수에 css메서드를 적용
    //태그선택

    // $("li").css("background","pink");
    var el2 = $("li"); // $(): 제이쿼리 객체로 만든다
    el2.css("background","pink");
    
    // 배열중 특정번쨰만 적용
    $(el2[1]).css("color","red"); 
    // el2.eq(1).css("color","red");

    el2.each(function(a,b){
        el2.eq(a).css("color","green");
        $(b).css("background","black");
    });
    
    var el3 = $(".highlight");
    el3.eq(1).css({color:"#f0f",fontSize:24,"background-color":"green",padding:"10px",width:500,margin:"0 auto"})
});
