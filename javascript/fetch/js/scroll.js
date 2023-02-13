const postContainer = document.querySelector("#posts-container"),
    loading = document.querySelector(".loader"),
    filter = document.querySelector("#filter");

let limit = 5,
    page = 1;

// API에서 게시글을 fetch로 통신하는 함수
async function getPosts(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`),
        data = await res.json();

    return data; // showPosts()안에서 실행 결과를 담고있음
}

// DOM에 보여주는 함수
async function showPosts(){
    const posts = await getPosts();
    
    posts.forEach((post)=>{
        console.log(post);
        const postEl = document.createElement('div');
        
        postEl.classList.add("post");
        postEl.innerHTML = `
            <div class="number">${post.id}</div>
            <div class="post-info">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">${post.body}</p>
            </div>
        `;

        postContainer.appendChild(postEl);
    });
}
showPosts();

// loding 애니메이션 함수
function showLoading(){
    loading.classList.add("show");

    setTimeout(()=>{
        loading.classList.remove("show");

        setTimeout(()=>{
            page++
            showPosts();
        }, 1000);
    }, 1000);
}
window.addEventListener("scroll", ()=>{
    /* 
        scrollTop: 스크롤 했을 때 왼쪽 꼭짓점의 값
        scrollHeight: 스크롤 한 값
        clientHeight: 사용자 화면의 크기(높이)
    */
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement; // 디스트럭쳐링
    // {
    //     scrollTop: obj.scrollTop,
    //     scrollHeight: obj.scrollHeight,
    //     clientHeight: obj.clientHeight,
    // }
    console.log(scrollTop, scrollHeight, clientHeight);
    if(scrollTop+clientHeight >= scrollHeight-3){
        showLoading();
    }
})

// 검색 키워드 필터링 함수
function filterPosts(e){
    const term = e.target.value.toUpperCase(),
        posts = document.querySelectorAll(".post");


    posts.forEach((post)=>{
        const title = post.querySelector(".post-title").innerText.toUpperCase(),
            body = post.querySelector(".post-body").innerText.toUpperCase();
    
        // indexOf: 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환
        if(title.indexOf(term) > -1 || body.indexOf(term) > -1){
            post.style.display = "flex";
        }else{
            post.style.display = "none";
        }
    })
}

filter.addEventListener("input", filterPosts);
