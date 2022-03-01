/*
  문제 : Level1 - 나머지가 1이 되는 수 찾기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/87389
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(n) {
    var answer = 0;
    /* answer를 1씩 증가 시킨다 / n을 answer로 나뉘었을때 나머지가 1이면 answer를 반환하고 반복문 종료 */ 
    while(true){
        answer++;
        if(n % answer === 1) return answer
    }
}
