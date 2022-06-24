/*
  문제 : Level2 - 멀리 뛰기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12914
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(n) {
    /* 피보나치 수열 패턴과 동일 */
    var answer = 0;
    const fibo = [0, 1, 2];
    for(let i=3; i<=n; i++){
        fibo[i] = (fibo[i-1] + fibo[i-2]) % 1234567;
    }
    answer = n > 2 ? fibo[n] : n;
    return answer;
}
