/*
  문제 : Level1 - 수박수박수박수박수박수?
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12922
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(n) {
    var answer = '';
    /* n이 홀수 or 짝수에 따라 문자열을 더해준다 */
    for(let i=0; i<n; i++){
        if(i % 2 === 0) answer += '수';
        else answer += '박';
    }
    return answer;
}
