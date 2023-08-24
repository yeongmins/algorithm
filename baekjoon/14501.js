const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// N = 근무일
const N = +input.shift(); 
// 첫번째 줄에 입력받은 근무일(N)을 shift()를 사용해서 제거를 하고 값을 변수 N에 할당
// +input에서 +는 문자열을 숫자로 변환하는 역할

const map = input.map((arr) => arr.split(' ').map(Number)); 
// arr 변수로 input 배열의 요소를 받고 문자열을 공백 기준으로 배열로 변환
// input 배열에서 받은 '근무일' 과 '금액' 배열을 map 함수를 사용해서 문자열을 숫자로 변환

const array = Array(N + 1).fill(0); 
// 크기가 N + 1 인 1차원 배열 array를 생성
// fill(0) 을 사용해서 배열의 모든 요소를 0으로 초기화
// array[i]는 i까지 얻을 수 있는 최대 값을 저장

for (let i = 0; i < N; i++) { 
    // i를 0부터 근무일(N-1)까지 반복
    for (let j = i + map[i][0]; j <= N; j++) { 
        // j를 i + map[i][0]부터 N까지 반복한다. 
        // i에서 시작해서 j까지의 최대값을 갱신
        // i + map[i][0]은 i에서 다음 위치로 이동한 지점을 의미
        array[j] = Math.max(array[j], array[i] + map[i][1]); 
        // j에서 가능한 모든 경로를 검사
        // i번째 열의 첫번째 값(map[i][0]) 만큼 이동해서 j까지 갈 수 있는 경우를 확인
        // 현재 j 위치의 값과 i 위치의 값에 
        // i번째 열의 두 번째 값(map[i][1])을 더한 값 중 더 큰 값을 저장
        // i를 거쳐서 j로 가는 경로 중 최대 값을 array[j]에 저장하는 것을 의미
    }
}

console.log(Math.max(...array)); // array 배열의 최댓값을 출력
