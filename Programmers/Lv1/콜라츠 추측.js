/*
  문제 : Level1 - 콜라츠 추측
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12943
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(num) {
    var answer = 0;
    
    /* num이 1이 되면 반복문 종료 */
    while(num !== 1){
        /* num이 짝수면 2로 나누고 홀수면 3을 곱하고 1을 더한다 */
        if(num % 2 === 0) num /= 2;
        else num = (num * 3) + 1;
        // answer값 1증가
        answer++;
        // answer가 500보다 크면 -1을 반환하고 반복문 종료
        if(answer >= 500) return answer = -1;
    }
    return answer;
}
