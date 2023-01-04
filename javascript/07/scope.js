let sum = "전역"; // 1. 전역 변수에 값을 담는다
function addNumber() {
	let sum = "지역"; //지역변수이므로 함수블록안에 갖혀서 실행안됨
    // 2. 콘솔 위치를 옮긴다 console.log(sum);
    // 3. return문에 변수를 넘김
    // 4. 다른 함수에 인자로 전달
}
addNumber();
console.log(sum);