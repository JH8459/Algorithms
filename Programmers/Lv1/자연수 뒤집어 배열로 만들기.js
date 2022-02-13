/*
  문제 : Level1 - 자연수 뒤집어 배열로 만들기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12932
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(n) {
    var answer = [];
    // 자연수 n을 문자열로 변환 -> 문자단위로 쪼갠다 -> 정수로 바꿔서 배열에 저장 -> 배열 반전
    return answer= String(n).split('').map(Number).reverse();
}
