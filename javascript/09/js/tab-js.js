const btn = document.querySelectorAll('ul>li'), 
    panel = document.querySelectorAll('h3');


// panel.forEach((el)=>{
//     el.style.display = "none";
//     panel[0].style.display = "block";
// });
hidden(panel);
visible(panel[0]);

btn.forEach(function(el, i){
    el.addEventListener("click", function(){
        hidden(panel);
        visible(panel[i]);
    })
})

function visible(obj) {
    obj.length == undefined ?  obj.style.display = "block" : obj.forEach((el)=>{
        el.style.display = "block";
    });
}
function hidden(obj) {
    obj.length == undefined ?  obj.style.display = "none" : obj.forEach((el)=>{
        el.style.display = "none";
    });
}
