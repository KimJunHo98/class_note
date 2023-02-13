/* 
    getUltraSrtNcst	초단기실황조회
    getUltraSrtFcst	초단기예보조회
    getVilageFcst	단기예보조회
    getFcstVersion	예보버전조회
*/

// let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst'; /*URL*/
// let queryParams = '?' + encodeURIComponent('serviceKey') + '='+'0PsKzhgdwTGb31fYbqtimZXYqghQBb%2FfMm3iRnZbAk04jO0IecNoZCtGcF3n%2BHAkmq7dJDSpwQhDp1VknMlItw%3D%3D'; /*Service Key*/
// queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
// queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /**/
// queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
// queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(now); /**/
// queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0600'); /**/
// queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent('61'); /**/
// queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent('128'); /**/
const castBox = document.querySelector("#container");
let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/', /*URL*/
    params = {
        type: ["getUltraSrtNcst","getUltraSrtFcst"],
        Key: "0PsKzhgdwTGb31fYbqtimZXYqghQBb%2FfMm3iRnZbAk04jO0IecNoZCtGcF3n%2BHAkmq7dJDSpwQhDp1VknMlItw%3D%3D",
        pageNo: "1", 
        numOfRows: "1000",
        dataType: "JSON",
        base_date: now,
        base_time: "0600",
        nx: "73",
        ny: "134",
    },
    rainIcon = ["<i class='bi bi-sun-fill'></i>", "<i class='bi bi-cloud-drizzle-fill'></i>", "<i class='bi bi-cloud-rain-heavy-fill'></i>", "<i class='bi bi-cloud-snow-fill'></i>"],
    statusText, 
    locText;

url = `${url}${params.type[0]}?serviceKey=${params.Key}&pageNo=${params.pageNo}&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.base_date}&base_time=${params.base_time}&nx=${params.nx}&ny=${params.ny}`
console.log(url);

// 값 얻기
async function getPosts(){
    const res = await fetch(url),
        data = await res.json();
    
    return data;
}

// 얻은 값 가져오기
async function setPosts(){
    const posts = await getPosts(),
        datas = posts.response.body.items.item,
        // 동적요소 생성
        castEl = document.createElement("table"),
        tr = document.createElement("tr");
    let cast = {
        baseDate: datas[0].baseDate,
        rain: datas[0].obsrValue,
        rainInfo: function(){
            let info = this.rain;
            
            if(info == 0){
                statusText = "맑음";
                rainIcon = rainIcon[0];
            }else if(info == 1){
                statusText = "비"
                rainIcon = rainIcon[1];
            }else if(info == 2){
                statusText = "폭우"
                rainIcon = rainIcon[2];
            }else if(info == 3){
                statusText = "눈"
                rainIcon = rainIcon[3];
            }
        },
        temperature: datas[3].obsrValue,
        wind: datas[7].obsrValue,
        nx: datas[0].nx,
        ny: datas[0].ny,
        loc: function(){
            let point = [this.nx, this.ny];

            console.log(point);
            if(point[0] == 73 && point[1] == 134){
                locText = "강원도";
            }
        },
    };
    cast.rainInfo();
    cast.loc();

    castEl.classList.add("table");
    tr.innerHTML = `
        <td>오늘날짜: ${cast.baseDate}</td>
        <td>지역: ${locText}</td>
        <td>날씨: ${statusText}${rainIcon}</td>
        <td>기온: ${cast.temperature}도</td>
        <td>바람: ${cast.wind}/ms</td>
    `;

    castEl.appendChild(tr);
    castBox.appendChild(castEl);
}
setPosts();
