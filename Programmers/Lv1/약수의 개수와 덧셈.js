/*
  문제 : Level1 - 약수의 개수와 덧셈
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/77884
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(left, right) {
    /* 약수의 갯수가 짝수면 양수를 리턴, 홀수면 음수를 리턴하는 함수 선언 */
    const divisorFunc = (number) => {
        let countDivisor = 0;
        /* 약수의 갯수를 구하는 과정 */
        for(let i=1; i<=number; i++){
            if(number%i === 0) countDivisor += 1;
        }
        /* 약수의 갯수가 짝수인지 아닌지 판별 과정 */
        if(countDivisor%2 === 0) return number;
        else return number * -1; 
    }
    var answer = 0;
    /* left~right 사이값을 반복여 divisorFunc 리턴값을 answer에 더해준다. */
    for(let i=left; i<=right; i++){
        answer += divisorFunc(i);
    }
    return answer;
}
