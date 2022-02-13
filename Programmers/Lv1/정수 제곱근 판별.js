/*
  문제 : Level1 - 정수 제곱근 판별
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12934
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(n) {
    var answer = 0;
    // n의 제곱근을 구한다.
    const squareRoot = Math.sqrt(n);
    // 1로 나누었을 때 나머지가 0 즉, 제곱근이 양의 정수일 경우에는 answer = (제곱근+1)^2 아닐 경우엔 -1
    answer = (squareRoot % 1 === 0) ? (squareRoot+1) * (squareRoot+1) : -1;
    return answer;
}
