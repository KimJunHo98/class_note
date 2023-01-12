window.addEventListener("load", function(){
    addEventListener("scroll", ()=>{
        let wsc = parseInt(this.scrollY),
            arts =  document.querySelectorAll("article"),
            speed = 200;

            arts.forEach(function(i){
            if(wsc > i.offsetTop-speed){
                document.querySelector(".article1").classList.add("on");
                document.querySelector(".left1").classList.add("on");
                document.querySelector(".right1").classList.add("on");
                document.querySelector(".left2").classList.add("on");
                document.querySelector(".right2").classList.add("on");
                document.querySelector(".left3").classList.add("on");
                document.querySelector(".right3").classList.add("on");
                document.querySelector(".left4").classList.add("on");
                document.querySelector(".right4").classList.add("on");
            }
        });
        
    });
});