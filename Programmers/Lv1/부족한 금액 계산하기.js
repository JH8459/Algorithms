/*
  문제 : Level1 - 부족한 금액 계산하기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/82612
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(price, money, count) {
    var answer = -1;
    // 총 이용요금을 담을 변수 선언
    let totalCharge = 0;
    /* count 횟수만큼 반복문 수행, totalCharge를 계산한다. */
    for(let i=1; i<=count; i++){
        totalCharge += (i * price);
    }
    // answer변수는 totalCharge - 보유한 돈, 0보다 작다면 0을 리턴한다.
    answer = totalCharge - money;
    return answer > 0 ? answer : 0;
}
