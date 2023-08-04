let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 입력 받는 값을 숫자로 변환 후 count 변수에 할당
// count = K
const count = Number(input[0]);
// 빈 배열 선언 
const stack = [];
// 전체 합 선언
let sum = 0;

// count 값 만큼 반복문
for (let i = 1; i <= count; i++) {
    // 입력 받는 값을 숫자로 변환 후 numbers 변수에 할당
    const numbers = Number(input[i]);
    // numbers 변수에 0값이 들어오면 0값 들어오기 이전 숫자를 제거
    if(numbers === 0) {
        stack.pop();
    // 값이 0이 아니라면 stack 에 numbers 값 추가
    } else {
        stack.push(numbers);
    }
}

// 스택에 저장된 배열값 갯수 만큼 반복문
for (let i = 0; i < stack.length; i++) {
    // sum 변수에 stack 값 더하기
    sum += stack[i]
}

console.log(sum)