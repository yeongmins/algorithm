// 전체 학생의 수 = n
// 체육복을 도난당한 학생들의 배열 = lost
// 여벌의 체육복을 가져온 학생들의 배열 = reverse
// 체육수업을 들을 수 있는 학생의 최대값 구하기

function solution(n, lost, reserve) {
    // 체육복 상태를 나타내는 배열 초기화
    let clothes = new Array(n).fill(1); 
    // 모든 학생이 체육복 1벌을 가지고 있다는 가정 
    // .fill(1) 을 사용해 n의 요소를 1으로 채움
    
    // 여벌 체육복이 있는 학생 표시
    for (let r of reserve) {
        // for ... of 를 사용해서 reserve 배열을 반복하면서 배열의 요소롤 r에 할당
        clothes[r - 1] += 1;
        // 배열은 0부터 시작 해서 -1 해줌
        // 1을 증가시켜 여벌 체육복 있는 학생으로 표시
    }
    
    // 체육복을 도난당한 학생 표시
    for (let l of lost) {
        clothes[l - 1] -= 1;
        // 1을 감소시켜 체육복 도난당한 학생으로 표시
    }
    
    // 체육복 빌려주기
    for (let i = 0; i < n; i++) {
        if (clothes[i] === 0) {
        // 체육복 분실한 학생인 경우
            if (i > 0 && clothes[i - 1] === 2) {
                // i > 0: 현재 학생이 첫번째 학생이 아닌 경우
                // clothes[i - 1] === 2: 왼쪽에 있는 학생이 여분(2)의 체욱복을 가지고 있는 경우
                clothes[i] = 1;
                // 현재 학생의 체육복 수 = 1
                clothes[i - 1] = 1;
                // 왼쪽 학생의 체육복 수 = 1
            } else if (i < n - 1 && clothes[i + 1] === 2) {
                // i < n - 1: 현재 학생이 마지막 학생이 아닌 경우
                // clothes[i + 1] === 2: 오른쪽에 있는 학생이 여분(2)의 체욱복을 가지고 있는 경우
                clothes[i] = 1;
                // 현재 학생의 체육복 수 = 1
                clothes[i + 1] = 1;
                // 오른쪽 학생의 체육복 수 = 1
            }
        }
    }
    
    // 수업을 들을 수 있는 학생 수 계산
    let answer = clothes.filter(c => c > 0).length;
    // clothes(체육복 배열) 배열을 필터링
    // 0보다 큰 학생만 필터링 해서 
    // 필터링 된 배열 길이를 반환 = .length
    
    return answer;
}
