/*
  문제 : Level1 - 두 정수 사이의 합
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12912
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(a, b) {
    var answer = 0;
    // a와 b가 같은 경우 아무 수나 리턴
    if(a===b) return a;
    /* 두수를 대소 비교 후 작은수는 start, 큰수는 end에 담는다 */
    const start = a > b ? b : a;
    const end = a < b ? b : a;
    /* start~end 사이값들을 반복하여 answer에 더한다 */
    for(let i=start; i<=end; i++){
        answer += i;
    }
    return answer;
}
