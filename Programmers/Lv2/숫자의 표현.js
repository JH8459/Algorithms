/*
  문제 : Level2 - 숫자의 표현
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12924
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(n) {
    var answer = 0;
    // 연속되는 숫자의 합(serialSum), 연속될 숫자의 초기값(serialNum), n값까지 증가할 count 변수를 선언한다
    let serialSum = 0, serialNum = 1, count = 1;
    /* count 변수가 n보다 작거나 같다면 반복문 수행 */
    while(count <= n){
        // serialSum에 serialNum 값을 더해준다
        serialSum += serialNum;
        /* serialSum이 만약 n보다 크거나 같다면 아래의 코드를 수행한다 */
        if(serialSum >= n) {
            // serialSum이 n값과 같다면 answer값 증가
            if(serialSum === n) answer++;
            /* n값과 크거나 같다면 serialSum을 0으로 초기화시키고 count 증가시킨 뒤 serialNum 초기값을 count로 바꾼다 */
            serialSum = 0;
            count++;
            serialNum = count;
        /* 그게 아니라면 연속되는 숫자(serialNum)를 1씩 증가시킨다 */
        } else {
            serialNum++;
        }
    }
    // answer값을 반환한 뒤 종료
    return answer;
}
