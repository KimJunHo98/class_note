 // 오늘 날짜 생성
let date = new Date();
// YYYYMMDD
let year = String(date.getFullYear()),
    month = String(date.getMonth()+1).padStart(2, "0"),
    day = String(date.getDate()).padStart(2, "0"),
    now = year+month+day;