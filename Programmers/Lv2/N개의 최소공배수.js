/*
  문제 : Level2 - N개의 최소공배수
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12953
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(arr) {
    var answer = 0;
    /* 최대 공약수 (유클리드 호제법) */
    const gcd = (a, b) => {
        if(b === 0) return a;
        return gcd(b, a % b);
    };
    /* reduce 메소드를 이용해 두 수를 뽑아 두 수의 곱을 최대 공약수로 나눠 최소공배수를 구하는걸 반복한다 */
    answer = arr.reduce((a, b) => (a * b) / gcd(a, b));
    return answer;
}
