/*
  문제 : Level1 - 크레인 인형뽑기 게임
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/64061
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(board, moves) {
    var answer = 0;
    // 뽑힌 인형을 담을 바구니 변수 선언
    let bucket = [];
    /* 전달받은 moves 배열의 길이가 0보다 클 경우엔 반복한다 */
    while(moves.length > 0){
        // moves 배열의 맨 앞 요소를 삭제 후 move에 담는다
        const move = moves.shift();
        /* board 배열을 순회한다 */
        for(let i=0; i<board.length; i++){
            /* 만약 board의 i번째 요소중 move 인덱스가 0이 아니라면 (인형이 있는 경우) */
            if(board[i][move-1] !== 0){
                /* bucket 바구니에 해당 인형을 담고, 해당 인형자리를 0으로 바꿔 인형을 뽑아준뒤 반복문을 빠져나온다 */
                bucket.push(board[i][move-1]);
                board[i][move-1] = 0;
                break;
            }
        }
        /* 바구니에 담긴 인형수가 2보다 크거나 같고, 새로 담긴 인형이 바로 전에 담긴 인형과 같은 인형이라면 */
        if(bucket.length >= 2 && bucket[bucket.length - 1] === bucket[bucket.length - 2]){
            /* 바구니에 담긴 마지막 2개의 인형을 터트린 후 answer값을 2만큼 증가시킨다 */
            bucket = bucket.slice(0,-2);
            answer += 2;
        }
    }
    // answer를 반환하며 종료한다
    return answer;
}
