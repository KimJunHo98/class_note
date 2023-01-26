window.addEventListener("DOMContentLoaded", ()=>{
    const book1 = document.querySelector("#book1"),
        book2 = document.querySelector("#book2"),
        news1 = document.querySelector("#newsWrap_1"),
        news2 = document.querySelector("#newsWrap_2");
    
    const url = "./01.html",
        request = new XMLHttpRequest();

    request.open("GET", url);
    request.responseType = "document";
    
    request.onload = ()=>{
        const response = request.response,
            ids = response.querySelectorAll("[id]");

        news1.innerHTML = ids[0].innerHTML;
        news2.innerHTML = ids[1].innerHTML;
        book1.innerHTML = ids[0].innerHTML;
        book2.innerHTML = ids[1].innerHTML;
    };
    request.send();
});

// const url = "https://dummyjson.com/products";
// const req = new XMLHttpRequest();
// let div = document.querySelector("div");

// req.onload = ()=>{
//     const datas = req.response;

//     for(data of datas.products){
//         /* 
//             let brand = data.brand,
//             category = data.category,
//             images = data.images; 
//         */
//         let {brand, category, images} = data;// 객체 디스트럭처링(키값으로 래핑)  

//         div.innerHTML += `brand:${brand},<br>category:${category}
//         <br>images:${images}<hr>`;
//         console.log(data);
//     }
// };
// req.open("GET", url);
// req.responseType = "json";
// req.send();