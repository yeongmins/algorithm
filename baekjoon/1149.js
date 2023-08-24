let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');

let n = Number(input[0]); // 집의 개수를 입력

arr = []; // 각 집의 RGB 값을 저장할 배열
d = []; // 각 집을 각 색깔로 칠하는데 필요한 최소 비용을 저장할 배열

for (let i = 0; i < n; i++) {
    // n개의 집에 대한 RGB 값을 arr 배열에 저장
    let [r, g, b] = input[i + 1].split(' ').map(Number);
    arr.push([r, g, b]);

    // 각 집을 각 색깔로 칠하는데 필요한 최소 비용을 저장하기 위해
    // d 배열을 1000000으로 초기화
    d.push(new Array(3).fill(1000000));
}

// 첫 번째 집은 해당 집의 RGB 값과 동일한 비용으로 칠할 수 있으므로 초기화
d[0][0] = arr[0][0];
d[0][1] = arr[0][1];
d[0][2] = arr[0][2];

for (let i = 1; i < n; i++) {
    // 집을 하나씩 확인
    for (let j = 0; j < 3; j++) {
        // j번째 색을 사용할 때 최솟값
        for (let k = 0; k < 3; k++) {
            if (j != k) {
                // 인접한 집들은 같은 색깔이 되면 안되고
                // 이전 집의 색깔과 다른 두 가지 색깔로 칠한 경우 중
                // 최소 비용을 선택하여 현재 집을 칠하는데 필요한 최소 비용 갱신
                d[i][j] = Math.min(d[i][j], arr[i][j] + d[i - 1][k]);
            }
        }
    }
}

// 마지막 집을 빨강, 초록, 파랑으로 칠하는데 필요한 최소 비용 중 최솟값 출력
console.log(Math.min(d[n - 1][0], d[n - 1][1], d[n - 1][2]));