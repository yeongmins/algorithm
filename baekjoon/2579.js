const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);

// 입력으로 주어진 계단의 개수 N을 변수 N에 저장한다.
const N = input[0];

// dp 배열을 생성한다. dp는 각 인덱스가 i일 때, i번째 계단까지 선택하여 얻을 수 있는 최댓값을 의미한다.
const dp = new Array(N + 1);

// 1번째 계단까지 선택한 경우, 1번째 계단의 값만 선택할 수 있으므로 dp[1]에 input[1]을 저장한다.
dp[1] = input[1];

// 2번째 계단까지 선택한 경우, 1번째 계단과 2번째 계단의 값을 합한 값이 최댓값이 된다.
dp[2] = Math.max(input[1], input[1] + input[2]);

// 3번째 계단부터 N번째 계단까지 선택한 경우를 계산한다.
for (let i = 3; i <= N; i++) {
  // i번째 계단을 선택한 경우 두 가지 경우 중 큰 값을 dp[i]에 저장한다.
  dp[i] = Math.max(dp[i - 3] + input[i - 1] + input[i], dp[i - 2] + input[i]);
}

// N번째 계단까지 선택하여 얻을 수 있는 최댓값인 dp[N]을 출력한다.
console.log(dp[N]);
