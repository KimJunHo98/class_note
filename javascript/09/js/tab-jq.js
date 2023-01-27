// $("h3").hide();
// $(".one").show();

// $(".b1").click(function(){
//     $(".one").show().siblings().hide();
// })
// $(".b2").click(function(){
//     $(".two").show().siblings().hide();
// })
// $(".b3").click(function(){
//     $(".three").show().siblings().hide();
// })
const btn = $("ul li"),
    para = $("div h3");

para.hide();
para.eq(0).show();

// btn.eq(0).click(function(){
//     $(".one").show().siblings().hide();
// })
// btn.eq(1).click(function(){
//     $(".two").show().siblings().hide();
// })
// btn.eq(2).click(function(){
//     $(".three").show().siblings().hide();
// })

btn.each(function(i){
    btn.eq(i).click(function(){
        para.eq(i).show().siblings().hide();
    })
})


// function visible(obj){
//     obj.show();
// }
// function hidden(obj,i){
//     obj.hide();
// }

