/*
  문제 : Level1 - 짝수와 홀수
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12937
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(num) {
    var answer = '';
    // 2로 나누었을때 나머지가 없다면 짝수이므로 'Even', 홀수면 'Odd'
    answer = (num % 2 === 0) ? 'Even' : 'Odd'
    return answer;
}
