/*
  문제 : Level1 - 내적
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/70128
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(a, b) {
    var answer = 0;
    /* 0번째 인덱스부터 a,b 배열의 요소들의 곱을 answer 변수에 담아 반환한다 */
    for(let i=0; i<a.length; i++){
        answer += a[i] * b[i];
    }
    return answer;
}
