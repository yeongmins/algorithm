function sumNumbers(K, numbers) {
    // 빈 배열 stack을 생성
    const stack = [];
    // 전체 합 arr 변수 선언
    let sum = 0;
  
    // K번만큼 반복
    for (let i = 0; i < K; i++) {
      // numbers에 K만큼 입력하는 문자열을 parseInt를 사용해서 숫자로 변환
      const number = parseInt(numbers[i]);
      // number 값이 0 일시
      if (number === 0) {
        // stack 배열에서 가장 최근에 추가한 숫자를
        const removeNumber = stack.pop();
        // sum 합에서 빼기
        sum -= removeNumber;
      } else {
        // number가 0이 아니라면 배열 stack에 값 추가
        stack.push(number);
        // sum에 number 더하기
        sum += number;
      }
    }
    return sum;
  }

  