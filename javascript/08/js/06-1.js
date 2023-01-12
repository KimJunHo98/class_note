$(function(){
    $(window).scroll(function(){
        let sct = $(this).scrollTop(),
            arts = $("article"),
            speed = 200;

        arts.each(function(i){
            if(sct > arts.eq(i).offset().top-speed){
                $(".article1").addClass("on");
                $(".left").eq(i).addClass("on");
                $(".right").eq(i).addClass("on");
            }
        });
    });
});