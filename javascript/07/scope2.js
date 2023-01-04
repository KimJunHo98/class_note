function add(){
    var sum = 10+20; // 지역변수
    multi = 10*20; // 식별자만 쓰면 전역변수로 취급
    total = sum;
    return total
};
add();
console.log(multi);