$(window).mousemove(function(e){
    let pointer = {x:e.clientX, y:e.clientY};

    $("#m1").css({top:pointer.y/2, left:pointer.x/2});
    $("#cursor").css({top:pointer.y, left:pointer.x, marginTop:-($("#cursor").height()/2), marginLeft:-($("#cursor").width()/2)});
});