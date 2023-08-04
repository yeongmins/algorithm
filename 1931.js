const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

// 회의 개수(n), 회의 시작과 종료 시간을 나타내는 2차원 배열(arr)로 저장
const [n, ...arr] = input;

// 최대 회의를 나타내는 변수 초기화
let answer = 0;

// 각 활동의 시작과 종료 시간을 정렬하여 저장
const times = arr
  .map((num) => num.split(' ').map((num) => +num))
  // 각 요소 num 을 공백 기준으로 분할하여 배열을 만들고
  // 분할된 배열을 map 함수를 사용해서 시작시간, 종료시간을 숫자로 변환
  .sort((a, b) => {
    // 변환된 times 배열에 대해 정렬
    // 종료 시간이 같으면 시작 시간을 오름차순으로 정렬
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else { 
    // 종료 시간이 다르면 종료 시간을 으로 정렬
      return a[1] - b[1];
    }
  });

// 종료된 활동의 종료 시간을 기억하는 변수 초기화
let end = 0;

// 정렬된 활동들을 순회하며 최대 활동 수를 계산하는 부분
times.forEach((time) => {
  // 회의 시작 시간이 이전 활동의 종료 시간보다 크거나 같으면 
  if (time[0] >= end) {
    // 해당 회의을 선택하고, 회의수를 1 증가
    answer++;
    // 마지막으로 종료된 회의의 종료 시간을 갱신
    end = time[1];
  }
});

// 최대 활동 수 출력
console.log(answer);
