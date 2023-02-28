const gap = 2;

// 스크롤 양 알아내기
function scroll(){
    const sections = document.querySelectorAll("section"),
    nav = document.querySelector("nav"),
    gnbLi = nav.querySelectorAll(".gnb li"),
    sideNav = document.querySelectorAll(".side_nav li");

    let scrollTop;

    function removeOn(obj){
        obj.forEach((o)=>{  
            o.classList.remove("on");
        });
    }

    function smooth(el){
        document.querySelector(el.firstChild.getAttribute("href")).scrollIntoView({behavior: "smooth"});
    }

    window.addEventListener("scroll", function(){
        scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
        animate(scrollTop);
    })
    
    const animate = (sct)=>{ 
        // section
        sections.forEach((el, i)=>{
            let sectionTop = el.offsetTop;

            if(sct > sectionTop - gap){
                gsap.to(el, {backgroundColor: "#f74e4e", ease:"linear"});

                removeOn(gnbLi);
                gnbLi[i].classList.add("on");

                removeOn(sideNav);
                sideNav[i].classList.add("on");
            }else{
                gsap.to(el, {backgroundColor: "#f1f380", ease:"linear"});
            }
        });

        // nav의 높이만큼 스크롤을 할 때
        sct >= nav.clientHeight * 2 ? nav.classList.add("sticky") : nav.classList.remove("sticky");
        console.log(sct);
    }
    
    // gnb li
    gnbLi.forEach((el)=>{
        el.addEventListener("click", function(e){
            e.preventDefault();

            smooth(el);
            
            removeOn(el);
            el.classList.add("on");
        })
    })

    // side_nav li
    sideNav.forEach((el)=>{
        el.addEventListener("click", function(e){
            e.preventDefault();

            smooth(el);
            
            removeOn(el);
            el.classList.add("on");
        })
    })
};
scroll();


