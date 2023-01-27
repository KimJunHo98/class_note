let button = $(".gallery li a"),
    target = $("#lightbox_overlay"),
    targetImg = target.find("img");

button.click(function(){
    let newImg = $(this).find("img").attr("data-lightbox");

    target.addClass("visible");
    targetImg.attr("src", newImg);
})
targetImg.click(function(){
    target.removeClass("visible");
})
target.click(function(){
    $(this).removeClass("visible");
})
