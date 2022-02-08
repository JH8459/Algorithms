/*
  문제 : Level1 - x만큼 간격이 있는 n개의 숫자
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12954
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(x, n) {
    var answer = [];
    
    /* answer 배열에 X씩 증가하게끔 for문 작성 */
    for(let i=1; i<=n; i++){
        // answer 배열에 push해줄 temp 변수 선언
        let temp = x * i;
        answer.push(temp);
    }
    
    return answer;
}
