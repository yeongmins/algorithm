let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 첫 번째 줄에서 n과 m을 공백을 기준으로 분리하고 숫자로 변환하여 저장
let [n, m] = input[0].split(" ").map(Number);

// 1부터 n까지의 자연수가 담긴 배열을 초기화
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
}

// 결과를 저장할 문자열을 초기화
let answer = "";

// 깊이 우선 탐색(DFS) 함수를 정의
function dfs(selected, depth) {
    // 원하는 개수 m만큼 숫자를 선택한 경우 결과를 처리
    if (depth === m) {
        // 선택된 숫자들을 순회하며 answer 문자열에 추가
        for (let i of selected) {
            answer += arr[i] + " ";
        }
        // 줄바꿈 문자를 추가하여 결과를 구분
        answer += "\n";
        return; 
    }
    
    // 모든 숫자에 대해 탐색
    for (let i = 0; i < arr.length; i++) {
        // 이미 선택된 숫자인지 확인
        if (!selected.includes(i)) {
            // 선택되지 않은 숫자인 경우, 선택 배열에 추가
            selected.push(i);
            // 다음 깊이의 DFS 호출을 수행
            dfs(selected, depth + 1);
            // 다른 선택지를 위해 선택 배열에서 마지막 숫자를 제거
            selected.pop();
        }
    }
}

// 초기에는 아무 숫자도 선택되지 않은 상태에서 DFS를 시작
dfs([], 0);
console.log(answer);
