/*
  문제 : Level1 - 예산
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12982
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(d, budget) {
    var answer = 0;
    /* d배열을 오름차순으로 정렬한 뒤, sumD 변수에 d배열의 합을 담는다 */
    d.sort((a,b) => a-b);
    let sumD = d.reduce((a,b) => a+b, 0);
    // 만약 선언한 sumD 값이 예산 budget 보다 작거나 같다면 d배열의 길이를 반환하고 함수를 종료한다
    if(sumD <= budget) return d.length;
    /* sumdD값이 예산보다 크다면 d배열의 마지막 요소를 제거한뒤 sumD값을 재산정한다. */
    while(sumD > budget){
        d.pop();
        sumD = d.reduce((a,b) => a+b, 0);
        answer = d.length; 
    } 
    // 예산안에 들어오면 반복문을 종료한 뒤 answer(d.length)값을 반환한다
    return answer;
}
