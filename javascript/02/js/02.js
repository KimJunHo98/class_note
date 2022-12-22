// 대입 연산자 
// A += B	A와 B를 더한 값을 A에 할당
// A -= B	A와 B를 뺀 값을 A에 할당
// A *= B	A와 B를 곱한 값을 A에 할당
// A /= B	A와 B를 나눈 값을 A에 할당
// A %= B	A와 B를 나눈 나머지값을 A에 할당

let x = 75;
let y = 87;
let z = x+y;
x+=y; // 재할당 (x+=y -> x = x+y )

document.write(`영어점수: ${x} <br> 수학점수:${y} <br> 합계:${x} 평균:${x/2}`);

