const scrollCnt = document.querySelector("main");

scrollCnt.addEventListener("wheel", function(e){
    e.preventDefault();

    // scrollLeft: 수평 스크롤바 위치 반환
    // e.deltaY: 휠 방향 반환, 위로 올리면 -100 아래로 내리면 100
    let amt = scrollCnt.scrollLeft += e.deltaY; // 반환 값 계속 더하기
    console.log(amt);
})