const btn = document.querySelectorAll(".gallery li a"), 
// querySelectorAll는 배열형식으로 값을 받기 때문에 반복문 사용해야함
    target = document.querySelector("#lightbox_overlay"),
    targetImg = target.querySelector("img");

for(i=0; i<btn.length; i++){
    btn[i].addEventListener("click", function(){
        let data = this.querySelector("img").getAttribute("data-lightbox");
        // getAttribute: 가져오기

        target.classList.add("visible");
        targetImg.setAttribute("src", data);
        // setAttribute: 가져온 값을 받아쓰기
    })
    targetImg.addEventListener("click", function(){
        target.classList.remove("visible");
    })
    target.addEventListener("click", function(){
        this.classList.remove("visible");
    })
}
