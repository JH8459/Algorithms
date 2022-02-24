/*
  문제 : Level1 - 나누어 떨어지는 숫자 배열
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12910
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(arr, divisor) {
    var answer = [];
    // arr배열의 요소중 divisor로 나눠 떨어지는 값을 오름차순으로 정렬한다
    answer = arr.filter((el)=>el%divisor === 0).sort((a,b)=>a-b);
    // answer배열이 비어있다면 [-1]을 리턴한다
    return answer.length > 0 ? answer : [-1];
}
