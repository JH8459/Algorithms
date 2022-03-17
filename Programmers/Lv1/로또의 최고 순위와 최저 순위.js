/*
  문제 : Level1 - 로또의 최고 순위와 최저 순위
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/77484
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(lottos, win_nums) {
    var answer = [];
    // 당첨된 숫자에 따라 등수를 출력할 ranking 배열 선언
    const ranking = [6,6,5,4,3,2,1];
    /* 당첨된 숫자와 알수없는 숫자를 카운팅할 변수 선언 */
    let answerCount = 0;
    let unknownCount = 0;
    /* lottos 배열을 순회하며 당첨 혹은 알수없는 숫자인지 여부를 확인한다 */
    for(let el of lottos){
        if(win_nums.indexOf(el) !== -1) answerCount ++;
        else if(el === 0) unknownCount ++;
    }
    /* 최대 당첨 경우의 수와 최저 당첨 경우의 수를 계산한 뒤 반환한다 */
    answer = [ranking[answerCount+unknownCount], ranking[answerCount]]
    return answer;
}
