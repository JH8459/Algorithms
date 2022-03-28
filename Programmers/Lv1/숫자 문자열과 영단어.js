/*
  문제 : Level1 - 숫자 문자열과 영단어
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/81301
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(s) {
    var answer = '';
    /* 문자를 합칠 임시 문자열 변수(temp)와 0~9 까지 문자 형태로 담긴 배열(numArray) 선언 */
    let temp = '';
    const numArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    /* 전달인자 문자열 s를 한 단어(char) 단위로 반복 수행한다 */
    for(let char of s){   
        /* 쪼갠 char 문자가 숫자라면 answer에 담고 숫자가 아니라면 temp 변수에 담는다 */
        if(!isNaN(char)) answer += char;
        else temp += char;
        /* temp 변수가 numArray 배열안에 존재한다면 answer에 해당 인덱스를 담고 temp를 빈 문자열로 초기화 한다 */
        if(numArray.indexOf(temp) >= 0) {
            answer += numArray.indexOf(temp);
            temp = '';
        }
    }
    // 문자열 answer를 정수로 변환한 뒤 반환한다
    return Number(answer);
}
