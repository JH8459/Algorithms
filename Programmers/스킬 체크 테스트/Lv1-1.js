/*
  문제 : 스킬 체크 테스트 Level.1
  문제출처 : https://programmers.co.kr/skill_checks/351888
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(s){
    var answer = true;
    /* p와 y의 갯수를 셀 변수 선언*/
    let p = 0, y = 0;
    /* 문자열 s를 순회한다 */
    for(let char of s){
        /* char를 소문자로 변환뒤 p 혹은 y의 갯수를 세어준다 */
        if(char.toLowerCase() === 'p') p++;
        else if(char.toLowerCase() === 'y') y++;
    }
    /* p와 y의 갯수가 같다면 true 아니면 false를 answer에 담아 반환한다 */
    answer = (p === y) ? true : false;
    return answer;
}
