
/*
  문제 : Level1 - 문자열 다루기 기본
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12918
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(s) {
    var answer = true;
    // 숫자만 구분 하는 정규 표현식
    const RegExp = /^[0-9]+$/;
    /* 만약 s의 길이가 4 or 6이면서 정규식을 충족하면 true 아니면 false */
    if(s.length === 4 || s.length === 6){
        answer = RegExp.test(s) ? true : false;
    } else {
        return false;
    }
    return answer;
}
