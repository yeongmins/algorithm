function solution(n, lost, reserve) {
    // 체육복 상태를 나타내는 배열 초기화
    let clothes = new Array(n).fill(1);
    
    // 여벌 체육복이 있는 학생 표시
    for (let r of reserve) {
        clothes[r - 1] += 1;
    }
    
    // 체육복을 도난당한 학생 표시
    for (let l of lost) {
        clothes[l - 1] -= 1;
    }
    
    // 체육복 빌려주기
    for (let i = 0; i < n; i++) {
        if (clothes[i] === 0) {
            if (i > 0 && clothes[i - 1] === 2) {
                clothes[i] = 1;
                clothes[i - 1] = 1;
            } else if (i < n - 1 && clothes[i + 1] === 2) {
                clothes[i] = 1;
                clothes[i + 1] = 1;
            }
        }
    }
    
    // 수업을 들을 수 있는 학생 수 계산
    let answer = clothes.filter(c => c > 0).length;
    
    return answer;
}
