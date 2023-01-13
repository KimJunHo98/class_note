$(function(){
    var winW = $(window).innerWidth(),
        winH = $(window).innerHeight(),
        vidW = $("#main_video").innerWidth(),
        vidH = $("#main_video").innerHeight();
        
        // setInterval(videoResizeFn, 100);
        $(window).resize(function(){
            videoResizeFn()

        });
        
        // 비디오 풀사이즈
    function videoResizeFn(){
        console.log(`winW=${winW}winH=${winH}vidW=${vidW}vidH=${vidH}`);
        winW = $(window).innerWidth(),
        winH = $(window).innerHeight(),
        vidW = $("#main_video").innerWidth(),
        vidH = $("#main_video").innerHeight();
        
        $(".main_video").css({width:"100%", height:winH});
        if(winH>vidH){
            $("#main_video").css({width:"auto", height:winH});
        }
        if(winW>vidW){
            $("#main_video").css({width:winW, height:"auto"});
        }

        // 정렬
        $("#main_video").css({"margin-left":(winW-vidW)/2, "margin-top":(winH-vidH)/2});
    };
});