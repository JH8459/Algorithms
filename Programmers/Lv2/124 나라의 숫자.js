/*
  문제 : Level2 - 124 나라의 숫자
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12899
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(n) {
    var answer = '';
    // 변형 3진법이다. 나머지가 0일땐 '4', 1일땐 '1', 2일땐 '2'로 치환하기 위한 배열 선언
    const nTo124 = ['4', '1', '2'];
    /* n이 0값이 아닐때까지 반복 수행한다. */
    while(n){
        // answer에 n을 3으로 나머지값을 nTo124배열의 인덱스로 갖는 숫자를 더해준다 (기존 answer는 뒤에 붙혀준다)
        answer = nTo124[n%3] + answer;
        // 만약 나누어 3으로 나누어 떨어지는 경우에는 몫에서 1값을 빼고, 아닌 경우에는 n/3의 몫으로 n을 치환한다
        n = (n%3 === 0) ? n/3 - 1 : Math.floor(n/3);
    }
    // answer를 반환하여 종료한다
    return answer;
}
