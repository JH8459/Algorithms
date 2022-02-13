/*
  문제 : Level1 - 정수 내림차순으로 배치하기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12933
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(n) {
    var answer = 0;
    // n을 문자열로 치환 -> 한 문자 단위로 쪼갠다 -> 내림차순 정렬 -> 한 문자 단위로 합친다 -> 문자열을 정수형으로 치환
    return answer = Number(String(n).split('').sort((a, b) => b - a).join(''));
}
