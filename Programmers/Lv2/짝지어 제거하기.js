/*
  문제 : Level2 - 짝지어 제거하기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12973
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(s)
{
    var answer = -1;
    // 문자열 s를 쪼갠 문자를 담을 배열 스택 선언
    const stackArr = [];
    /* 문자열 s를 문자단위 char로 나누어 반복 수행 */
    for(let char of s){
        // 스택에 한문자씩 집어넣는다
        stackArr.push(char);
        // 스택의 길이를 담을 len 변수 선언
        const len = stackArr.length - 1;
        /* 스택에 쌓인 마지막 두 문자가 같다면 해당 문자 2개를 제거한다 */
        if(stackArr[len] === stackArr[len-1]){
            stackArr.pop();
            stackArr.pop();
        }
    }
    /* answer에 스택에 담긴 문자를 모두 연결한 문자열의 길이가 0보다 크다면 0을 리턴, 아니라면 1을 리턴한다 */
    answer = stackArr.join('').length ? 0 : 1;
    return answer;
}
