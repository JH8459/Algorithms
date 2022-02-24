/*
  문제 : Level1 - 문자열 내림차순으로 배치하기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/42748
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(s) {
    var answer = '';
    // 문자단위로 쪼갠 뒤 오름차순으로 정렬, 역순으로 뒤집은 뒤 합쳐준다.
    answer = s.split('').sort().reverse().join('');
    return answer;
}
