/*
  문제 : Level2 - 피보나치 수
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12945
*/

/*---------------------------------------*/
// [Solution 1.] 시간 초과로 실패
function solution(n) {
    var answer = 0;
    /* 피보나치 수를 구하는 재귀함수 선언 */
    const getFibonacci = (n) => {
        if(n < 2) return n;
        return getFibonacci(n-1) + getFibonacci(n-2);
    }
    /* answer에 n번째 피보나치수를 1234567로 나눈 결과값을 담아 반환한다 */
    answer = getFibonacci(n) % 1234567;
    return answer;
}
