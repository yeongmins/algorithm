// n: 화살의 개수
// info: 어피치가 맞힌 과녁 점수의 개수를 10점부터 0점까지 순서대로 담은 정수 배열

// n	          info	                 result
// 5	[2,1,1,1,0,0,0,0,0,0,0]	[0,2,2,0,1,0,0,0,0,0,0]

function solution(n, info) {
  let answer = Array(11).fill(0); // 각 점수별로 어피치가 던진 화살 개수를 저장하는 배열
  let maxCount = 0; // 최대 점수 차이를 나타내는 변수

  function findMaxPoint(apeachCount, ryanCount, count, point, arr) {
    // 모든 가능한 게임 상황을 탐색
    // apeachCount: 어피치가 얻은 점수의 총합
    // ryanCount: 라이언이 얻은 점수의 총합
    // count: 사용한 화살의 개수
    // point: 현재 던지는 화살의 점수
    // arr: 현재까지의 화살 던지기 상황을 저장한 배열

    if (n < count) return; // 사용한 화살의 수가 전체 화살수 보다 큰 경우 종료

    if (point > 10) {
      // 현재까지 던진 화살의 점수가 10점을 넘는 경우 / info 배열의 합
      let diff = ryanCount - apeachCount;
      // 라이언이 얻은 점수에서 어피치가 얻은 점수를 빼서 어피치와 라이언의 점수 차이를 계산
      if (maxCount < diff) {
        // 계산한 점수 차이가 현재까지의 최대 점수 차이보다 큰 경우
        arr[10] = n - count;
        // 모든 화살을 다 사용했을 때 남은 화살의 개수를 배열의 마지막 인덱스에 저장
        maxCount = diff; // 해당 포인트 차이를 maxCount에 저장
        answer = arr; // 해당 경우를 answer에 저장
      }
      return;
    }

    if (n > count) {
      // 라이언이 이겨 포인트를 얻는 경우
      let current = [...arr];
      current[10 - point] = info[10 - point] + 1;
      findMaxPoint(
        apeachCount,
        ryanCount + point,
        count + info[10 - point] + 1,
        point + 1,
        current
      );
    }

    if (info[10 - point] > 0) {
      // 어피치가 이겨 포인트를 얻는 경우
      findMaxPoint(apeachCount + point, ryanCount, count, point + 1, arr);
    } else {
      // 둘다 점수를 얻지 못하는 경우
      findMaxPoint(apeachCount, ryanCount, count, point + 1, arr);
    }
  }

  findMaxPoint(0, 0, 0, 0, answer); // 0포인트 부터 나올수 있는 모든 경우를 탐색한다

  return maxCount <= 0 ? [-1] : answer;
}
