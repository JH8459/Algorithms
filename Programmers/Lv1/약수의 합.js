/*
  문제 : Level1 - 약수의 합
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12928
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(n) {
    var answer = 0;
    /* 1~n까지 숫자중 나누어 떨어지는 숫자는 약수이다*/
    for(let i=1; i<=n; i++){
        if(n % i === 0) answer += i;
    }
    return answer;
}
