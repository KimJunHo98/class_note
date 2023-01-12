// jq
const textZone = $("#textZone"),
    btn1 = $("#btn1"),
    btn2 = $("#btn2"),
    btn3 = $("#btn3"),
    listWrap = $("#listWrap"),
    list1 = $(".list1");

btn1.click(function(){
    textZone.css("color","red").addClass("blue");
});

btn2.mouseover(function(){
    textZone.css("background-color","yellow");
}).focus(function(){
    textZone.css("background-color","yellow");
});

// 두개이상의 이벤트를 등록시킬 때
// btn3.on("mouseover focus", function(){
//     // css속성을 여러개 사용할 때 ({"":"", "":""})
//     textZone.css({"color":"green", fontSize:"2em"});
//     textZone.css("background-color","red");
// });

// 이벤트와 실행문이 다를 때
btn3.on({
    "mouseover focus": function(){
        textZone.css({"color":"green", fontSize:"2em"});
        textZone.css("background-color","red");
    },
    click: function(){
        textZone.css("marginLeft","80px");
    } // ; 끌낼 때 붙이면 안됨
});

$("#listWrap").hover(function(){
    $(list1).css("display","block");
}, function(){
    $(list1).css("display","none");
});

$(".hover").hover(function(){
    $(this).css("color","aqua");
}, function(){
    $(this).css("color","red");
});
