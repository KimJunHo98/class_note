const nav = document.querySelector("nav"),
gnbLi = document.querySelectorAll(".gnb li"),
gnbAnc = document.querySelectorAll(".gnb li a"),
sideNavLi = document.querySelectorAll(".sideNav li"),
sideNavAnc = document.querySelectorAll(".sideNav li a"),
sections = document.querySelectorAll(".section"),
gap = 200;

let winH = window.innerHeight,
sct;

// 스크롤 이벤트 바인딩
window.addEventListener("scroll", function(){
    sct = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
    
    sectionAni(sct);
    sideNavAni();
})

// Anc 클릭 이벤트 함수
function clickEvent(el){
    el.addEventListener("click", e => {
        e.preventDefault();

        document.querySelector(el.getAttribute("href")).scrollIntoView({behavior: "smooth", block: "center"});
    });
}

// 클래스 제거 함수
function removeOn(el){
    el.forEach(obj => {  
        obj.classList.remove("on");
    });
}

// sideNav 애니메이션 함수
function sideNavAni(){
    const sideNav = document.querySelector(".sideNav");

    sideNav.style.top = "-10%";
    setTimeout(()=> {
        // 연산자 우선순위 때문에 (winH - sideNav.clientHeight) 묶음
        sideNav.style.top = parseInt((winH - sideNav.clientHeight) / 2) + "px";
    }, 400);
}

// parallaxAni 함수
function parallaxAni(){
    const parallax = document.querySelectorAll(".parallax .pbox");

    parallax.forEach((el)=>{
        const delay = el.dataset.delay;

        el.classList.remove("sectionIn");
        setTimeout(() => {
            el.classList.add("sectionIn");
        }, delay);
    });
}

// gnbAnc 클릭 이벤트 바인딩
gnbAnc.forEach(el => {
    clickEvent(el);
})

// sideNavAnc 클릭 이벤트 바인딩
sideNavAnc.forEach(el => {
    clickEvent(el);
})

// sections에 스크롤양 전달
const sectionAni = winSct => {
    winSct > sections[0].offsetTop ? nav.classList.add("sticky") : nav.classList.remove("sticky");

    sections.forEach((obj, i) => {
        sct = obj.offsetTop;
        
        const delay = obj.dataset.delay;

        if(winSct > sct - gap){
            // section에 delay속성이 없는 경우
            if(delay == undefined){
                if(obj.hasChildNodes(".parallax")){
                    parallaxAni();
                }else{
                    obj.classList.add("sectionIn");
                }
            }else{
                // section에 delay속성이 있는 경우
                setTimeout(() => {
                    obj.classList.add("sectionIn");
                }, delay);
            }

            removeOn(gnbLi);
            gnbLi[i].classList.add("on");

            removeOn(sideNavLi);
            sideNavLi[i].classList.add("on");
        };
    });
}