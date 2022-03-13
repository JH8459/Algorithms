/*
  문제 : Level1 - 없는 숫자 더하기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/86051
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(numbers) {
    var answer = 0;
    /* numbers배열에 i(0~9)값이 없다면 answer 변수에 담는다 */
    for(let i=0; i<=9; i++){
        if(numbers.indexOf(i) === -1) answer += i;
    }
    return answer;
}
