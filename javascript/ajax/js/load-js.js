addEventListener("DOMContentLoaded", ()=>{
    // 02.html에 요소를 담을 변수를 초기화
    const news1 = document.querySelector("#newsWrap_1"),
        news2 = document.querySelector("#newsWrap_2");

    /* 
    open(method, url, async)	
    
        XMLHttpRequest 객체를 이용해서 요청을 만드는 함수
        method: 요청 방식: GET ,POST...
        url: 요청을 처리할 스크립트의 위치
        async: true (비동기식) 또는 false (동기식) 
    */
    
    // 기본 url설정
    const url = "./01.html",
        request = new XMLHttpRequest(); // XMLHttpRequest: ajax 작업을 위한 XMLHttpRequest 객체를 생성하는 함수

    request.open("GET", url);
    // 응답할 데이터 형식
    request.responseType = "document"; // document => html, xml
    // 응답
    request.onload = ()=>{
        //responseXML: 전달 받을 데이터를 xml DOM객체로 반환
        const response =  request.response, 
            ids = response.querySelectorAll("[id]"); // 반환받은 요소에서 id속성을 모두 변수 ids에 저장

        news1.innerHTML = ids[0].innerHTML;
        news2.innerHTML = ids[1].innerHTML;
        console.log(response, ids);
    };
    /* 
    send(data): 서버에 요청하는 함수 - data(get방식): 서버로 전송하는 파라미터 
    send(string): 서버에 요청하는 함수 - string(post방식): 서버로 전송하는 파라미터
    */
    request.send();
});