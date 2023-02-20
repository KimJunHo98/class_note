const gap = 2;

// 스크롤 양 알아내기
function scroll(){
    const sections = document.querySelectorAll("section"),
    nav = document.querySelector("nav"),
    gnbLi = nav.querySelectorAll(".gnb li");

    let scrollTop;

    window.addEventListener("scroll", function(){
        scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
        animate(scrollTop);
    })
    
    const animate = (sct)=>{ 
        // section
        sections.forEach((el)=>{
            let sectionTop = el.offsetTop;

            if(sct > sectionTop - 2){
                el.classList.add("sectionIn");
            }else{
                el.classList.remove("sectionIn");
            }
        });

        // nav
        (sct >= gap) ? nav.classList.add("sticky") : nav.classList.remove("sticky");
    }
    
    // gnb li
    gnbLi.forEach((el)=>{
        el.addEventListener("click", function(e){
            e.preventDefault();

            document.querySelector(el.firstChild.getAttribute("href")).scrollIntoView({behavior: "smooth"});
            
            gnbLi.forEach((obj)=>{
                obj.classList.remove("on");
            })
            el.classList.add("on");
        })
    })
};
scroll();
