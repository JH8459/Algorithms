/*
  문제 : Level1 - [1차] 다트 게임
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/17682
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(dartResult) {
    var answer = 0;
    /* 라운드별 점수를 저장할 배열 roundScore와 라운드별 점수를 계산하기 위한 임시변수 temp를 선언한다 */
    let roundScore = [];
    let temp = 0;
    /* dartResult 문자열을 순회하며 한글자씩 잘라서 점수를 계산한다 */
    for(let i=0; i<dartResult.length; i++){
        /* 숫자가 나오는 경우 temp 변수에 담아 계산을 준비한다 (1이 나오는 경우 다음 숫자까지 한번더 Check해서 10을 고려한다) */
        if(dartResult[i].match(/[0-9]/)) {
            if(dartResult[i] === '1' && dartResult[i+1] === '0') {
                temp = 10;
                i++;
            }
            else temp = dartResult[i];
        }
        /* SDT에 따라 temp에 담긴 기본 점수를 다시 계산한뒤 roundScore 배열에 넣어준다 */
        else if(dartResult[i] === 'S') roundScore.push(Number(temp));
        else if(dartResult[i] === 'D') roundScore.push(Math.pow(temp, 2));
        else if(dartResult[i] === 'T') roundScore.push(Math.pow(temp, 3));
        /* 스타상이 나온경우 roundScore에 담긴 이번 라운드와 전 라운드 점수를 2배 처리 한다 */
        else if(dartResult[i] === '*') {
            roundScore[roundScore.length-1] *= 2;
            roundScore[roundScore.length-2] *= 2;
        }
        /* 아차상이 나온경우 roundScore에 담긴 이번 라운드 점수를 음수 처리 한다 */
        else if(dartResult[i] === '#') {
            roundScore[roundScore.length-1] *= -1;
        }
    }
    /* roundScore에 담긴 각 라운드별 점수를 모두 더해 반환한다 */
    answer = roundScore.reduce((acc, cur) => acc+cur);
    return answer;
}
