// jq
// var sub = $(".sub");
// 
// sub.css("display","none");
// $(".gnb >li > a").click(function(){
//     var k = $(this).next(".sub").css("display");
// 
//     if(k === "none"){
//         $(this).next().slideDown(300);
//     }else{
//         $(this).next().slideUp(300);
//     }
// });

// js
var sub = document.querySelector(".sub");

    sub.style.transition = "all .3s ease-in";
    sub.style.overflow = "hidden";
    sub.style.height = "0px";

document.querySelector(".gnb>li>a").addEventListener("click", function(){
    var k = this.nextElementSibling.style.height;

    if(k === "0px") {
        this.nextElementSibling.style.height = "110px";
    }else{
        this.nextElementSibling.style.height = "0px";
    }
});


