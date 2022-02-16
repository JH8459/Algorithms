/*
  문제 : Level1 - 자릿수 더하기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12931
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(n)
{
    var answer = 0;
    // n을 문자열로 바꾸어 준다
    const toString = String(n);
    /* toString의 길이만큼 반복 수행 */
    for(let i=0; i<toString.length; i++){
        // 한 글자씩 정수로 전환하여 answer 변수에 담는다.
        answer += Number(toString[i]);
    }
    return answer;
}
