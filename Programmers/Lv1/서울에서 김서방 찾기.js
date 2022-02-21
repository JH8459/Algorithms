/*
  문제 : Level1 - 서울에서 김서방 찾기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12919
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(seoul) {
    var answer = '';
    // seoul 문자열중 "Kim"의 위치를 찾는다.
    answer = '김서방은 ' + seoul.indexOf("Kim") + '에 있다'
    return answer;
}
