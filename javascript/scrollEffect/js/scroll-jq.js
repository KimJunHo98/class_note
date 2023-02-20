function scroll(){
    const sections = $("section");
    const h2 = $("h2.scroll");

    let scrollTop;

    $(window).scroll(function(){
        scrollTop = $(this).scrollTop();
        h2.innerHTML = scrollTop;
        animate(scrollTop);
    })

    const animate = (sct)=>{ 
        sections.each((i)=>{
            let tg = sections.eq(i);

            if(sct > tg.offset().top - 2){
                tg.addClass("sectionIn");
            }
        })
    }
};
scroll();