// js
// let h2 = document.querySelectorAll("h2"),
//     scrollTop;

// // for(let i=0; i<=h2.length; i++){
// //     h2[i].textContent = "section"+(i+1);
// // };

// h2.forEach(function(el,i){
//     el.textContent = "section"+(i+1);
// });

// window.addEventListener("scroll", function(){
//     scrollTop =  window.pageYOffset || document.documentElement.scrollTop || window.scrollY;

//     document.querySelector(".box").textContent = "<span>"+scrollTop+"</span>"+"px";
// });

// jq
let h2 = $("h2"),
    scrollTop;

h2.each(function(el,i){
    $(i).text("section"+(el+1));
    console.log(el,i);
});

$(window).scroll(function(){
    scrollTop = $(this).scrollTop();

    $(".box").html("<span>"+scrollTop+"</span>"+"px");
});

