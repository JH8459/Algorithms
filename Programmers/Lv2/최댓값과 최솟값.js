/*
  문제 : Level2 - 최댓값과 최솟값
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12939
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(s) {
    var answer = '';
    // 입력받은 문자열 s를 공백 단위로 쪼개어 char 변수에 담는다 
    const char = s.split(' ');
    /* 최소값과 최대값을 char 배열에서 찾아 담는다 */
    const max = Math.max(...char);
    const min = Math.min(...char);
    /* 형식에 맞춰 변형한 뒤 answer에 담아 리턴한다 */
    answer = String(min) + ' ' + String(max);
    return answer;
}
