/*
  문제 : Level1 - 문자열 내 마음대로 정렬하기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12915
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(strings, n) {
    var answer = [];
    /* strings 문자열을 sort 해준다. */
    answer = strings.sort((a, b) => {
        /* a와 b의 n번째 문자 비교하여 재정렬 */
        if(a[n] > b[n]) return 1;
        else if(a[n] < b[n]) return -1;
        // 위 두가지 외의 경우는 n번째 문자가 같은 문자인 경우이므로 원본 문자열을 비교한다.
        else {  // === else if(a[n] === b[n])
            if(a>b) return 1;
            else return -1;
        }
    });
    return answer;
}
