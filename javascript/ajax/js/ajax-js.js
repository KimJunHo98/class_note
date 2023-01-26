// 네트워크 통신으로 db받기
const request = new XMLHttpRequest(), // ajax 통신을 가능하게 하는 객체
    url = "./MOCK_DATA.json"; // 데이터 주소 설정

// 데이터 형식 설정
// 비동기 방식이기 때문에 상태 값에 따라 수행, 바뀐 응답요청값을 얻을 때는 onreadystatechange 속성의 readyState메서드를 활용
request.onreadystatechange = function(){
    if(request.readyState == 4 && request.status == 200){
        jsonfunc(this.responseText);
    }
}; 
/* 
status 서버의 동작 상태
- 200: 처리 성공, 400: 클라이언트오류, 500: 서버오류
*/
request.open("GET", url);
request.send();

// 응답받은 db를 화면에 출력
function jsonfunc(responseText){
    let id = new Array(),
        first_name = new Array(),
        last_name = new Array(),
        email = new Array(),
        gender = new Array(),
        table = document.createElement("table"); // createElement(): 태그생성
    const jsonTxt = JSON.parse(responseText), // JSON.parse(): json 데이터를 텍스트로 변환
        wrap = document.querySelector(".wrap"); // dom 요소 준비
        console.log(jsonTxt);

    for(i=0; i<jsonTxt.length; i++){
        id[i] = jsonTxt[i].id;
        first_name[i] = jsonTxt[i].first_name;
        last_name[i] = jsonTxt[i].last_name;
        email[i] = jsonTxt[i].email;
        gender[i] = jsonTxt[i].gender;

        // 문서에 tr, td태그 생성
        let tr = document.createElement("tr"),
            td1 = document.createElement("td"),
            td2 = document.createElement("td"),
            td3 = document.createElement("td"),
            td4 = document.createElement("td"),
            td5 = document.createElement("td");
        
        // 문서의 table, tr, td에 텍스트 생성
        table.appendChild(tr);

        td1.appendChild(document.createTextNode(id[i]));
        tr.appendChild(td1);
        
        td2.appendChild(document.createTextNode(first_name[i]));
        tr.appendChild(td2);
        
        td3.appendChild(document.createTextNode(last_name[i]));
        tr.appendChild(td3);
        
        td4.appendChild(document.createTextNode(email[i]));
        tr.appendChild(td4);
        
        td5.appendChild(document.createTextNode(gender[i]));
        tr.appendChild(td5);
    }
    wrap.appendChild(table);
};