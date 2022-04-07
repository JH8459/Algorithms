/*
  문제 : Level2 - JadenCase 문자열 만들기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12951
*/

/*---------------------------------------*/
// [Solution 1.] 테스트 케이스 절반 실패 => 연속되는 공백문자도 취급해주어야 하는데 연달아 있는 공백문자를 제거하여 테스트 실패
function solution(s) {
    var answer = '';
    // s문자열을 소문자로 변환
    const sToLowerCase = s.toLowerCase();
    // 가상 idx 변수 선언
    let idx = 0;
    /* 소문자로 이뤄진 sToLowerCase 문자열 순회 */
    for(let i=0; i<sToLowerCase.length; i++){
        /* 만약 공백을 만나면 idx값을 0으로 초기화, 다음 문자가 다시 공백인지 체크 후 공백이 아니라면 공백문자 추가 */
        if(sToLowerCase[i] === ' ') {
            idx = 0;
            if(sToLowerCase[i+1] !== ' ') answer += ' ';
        }
        /* 공백이 아닌 숫자 or 문자일 경우 */
        else {
            /* idx가 0 즉, 공백 다음 나온 문자라면 대문자로 치환 후 answer에 담아준뒤 idx를 증가시킨다 */
            if(idx === 0) {
                idx ++;
                answer += sToLowerCase[i].toUpperCase();
            }
            /* idx가 0이 아니라면 현재 문자를 answer에 담아준뒤 idx를 증가시킨다 */
            else {
                idx ++;
                answer += sToLowerCase[i];
            } 
        }
    }
    // answer를 반환하며 종료
    return answer;
}

// [Solution 2.]
function solution(s) {
    // 문자열 s를 공백 단위로 나눈뒤 answer에 담는다
    var answer = s.split(' ');
    // answer 배열에 담긴 값들의 첫 글자는 대문자로, 그 뒷 문자들은 소문자로 변환한 뒤 반환한다.
    // 반환된 배열에 담긴 요소들을 공백문자(' ')를 넣어 합쳐준뒤 반환한다.
    return answer.map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()).join(' ');
}
