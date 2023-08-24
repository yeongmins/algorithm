function minTotalTime(N, Pi) {  // N = 사람 수, Pi = 인출 시간
  Pi.sort((a, b) => a - b); // Pi를 오름차순으로 정렬

  let totalTime = 0; // 최소 시간 변수 선언
  let runningTime = 0; // 돈 인출하는데 걸리는 시간 누적할 변수 선언

  // 순서대로 돈을 인출하는데 필요한 시간의 합을 계산
  for (let i = 0; i < N; i++) {
    runningTime += Pi[i]; // 배열에서 각 사람이 돈을 인출하는데 걸리는 시간을 누적
    totalTime += runningTime; // 누적 시간을 최소 시간에 더하기
  }

  return totalTime; // 최솟값 반환
}
