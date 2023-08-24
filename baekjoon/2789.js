function findMaxCardSum(N, M, cards) {
    // N: 카드 갯수, M: 목표 합계, cards: 카드 숫자

  let maxSum = 0;   // 최대 합

  for (let i = 0; i < N - 2; i++) {
    // 0부터 N - 2까지 증가, 첫 번째 카드 선택
    // N - 2까지 반복하는 이유는 3장의 카드 중 나머지 2장을 선택하기 위해 사용

    for (let j = i + 1; j < N - 1; j++) {
        // i + 1 부터 N - 1까지 증가, 두 번째 카드 선택
        // i + 1 로 시작하는 이유는 첫번째 카드 이후 선택 되기위해 사용

      for (let k = j + 1; k < N; k++) {
        // j + 1부터 N까지 증가, 세 번째 카드 선택
        // j + 1 로 시작하는 이유는 두번째 카드 이후 선택 되기위해 사용

        const sum = cards[i] + cards[j] + cards[k];
        // 선택된 세 개의 합을 cards에 저장

        if (sum <= M && sum > maxSum) {
            // sum이 M보다 작거나 같고, maxSum보다 크다면
            // sum은 3개의 합을 임시적으로 저장, 반복문이 갱신되므로 최대합 보장 X

          maxSum = sum;
          // maxSum을 sum으로 선언
        }
      }
    }
  }

  return maxSum;
  // 반복문이 종료되면 maxSum을 반환
}
