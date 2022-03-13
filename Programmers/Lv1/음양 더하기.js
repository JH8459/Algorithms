/*
  문제 : Level1 - 음양 더하기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/76501
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(absolutes, signs) {
    var answer = 0;
    /* signs의 i번째 인덱스를 음양 판별 후 answer에 absolutes[i]값을 더해 반환한다 */ 
    for(let i=0; i<absolutes.length; i++){
        const sign = signs[i] === true ? 1 : -1;
        answer += absolutes[i] * sign;
    }
    return answer;
}
