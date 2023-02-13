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

let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/'; /*URL*/
let params = {
    type: ["getUltraSrtNcst","getUltraSrtFcst"],
    Key: "0PsKzhgdwTGb31fYbqtimZXYqghQBb%2FfMm3iRnZbAk04jO0IecNoZCtGcF3n%2BHAkmq7dJDSpwQhDp1VknMlItw%3D%3D",
    pageNo: "1", 
    numOfRows: "1000",
    dataType: "JSON",
    base_date: now,
    base_time: "0600",
    nx: "61",
    ny: "128",
}

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
    datas = posts.response.body.items.item;
    
    datas.forEach(data=>{
        const postEl = document.createElement("div");
        postEl.classList.add("post");
        postEl.innerHTML = `
            <div class="number">측정시간: ${data.baseTime}</div>
            <h2 class="post-title">카테고리: ${data.category}</h2>
            <div class="post-body">측정값: ${data.obsrValue}</div>
        `;
        document.body.appendChild(postEl);
    });
}
setPosts();
