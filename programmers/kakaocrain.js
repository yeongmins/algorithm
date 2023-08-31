// board: 2차원 배열로 표시된 게임판
// board = [
//    [0,0,0,0,0]
//    [0,0,1,0,3]
//    [0,2,5,0,1]
//    [4,2,4,4,2]
//    [3,5,1,3,1]
//    ]
// 0: 빈공간 / 1 ~ 5: 각각의 인형
// moves: 크레인의 움직임을 나타내는 배열

function solution(board, moves) {
    let stack = []; // 인형을 쌓아둘 바구니 배열
    let count = 0; // 사라진 인형의 총 개수를 나타내는 변수
    
    // 크레인 움직임에 따라 인형을 뽑아서 바구니에 쌓음
    for(let i = 0; i < moves.length; i++){ // moves 배열 순회
        for(let j = 0; j < board.length; j++){ // 게임판의 세로 길이만큼 순회
            if(board[j][moves[i]-1] === 0) continue; // 해당 위치에 인형이 없으면 다음 열 확인
            else {
                if(stack[stack.length-1] === board[j][moves[i]-1]){ // 바구니의 맨 위 인형과 뽑은 인형이 같으면
                    board[j][moves[i]-1] = 0; // 인형을 뽑았으므로 해당 위치를 0으로 변경 (인형 사라짐)
                    count+=2; // 사라진 인형의 개수 증가 (맨 위 인형 + 새로 뽑은 인형)
                    stack.pop(); // 바구니에서 맨 위 인형 제거
                    break; // 현재 크레인 움직임에 대한 처리 종료
                }
                stack.push(board[j][moves[i]-1]); // 인형을 바구니에 추가
                board[j][moves[i]-1] = 0; // 인형을 뽑았으므로 해당 위치를 0으로 변경 (인형 사라짐)
                break; // 현재 크레인 움직임에 대한 처리 종료
            }
        }
    }
    
    return count; // 총 사라진 인형의 개수 반환
}