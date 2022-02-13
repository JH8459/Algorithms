/*
  문제 : Level1 - 최대공약수와 최소공배수
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12940
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(n, m) {
    var answer = [];
    /* 최대공약수(유클리드 호제법) */
    const greatest = (a, b) => {  
        if (b === 0) return a   
        return greatest(b, a % b)  
    }
    /* 최소공배수 = 두 수의 곱 / 최대공약수 */
    const least = (a, b) => {
        return (a * b) / greatest(a, b);
    }
    // answer에 최대공약수와 최소공배수를 차례대로 넣어 반환한다
    answer = [greatest(n, m), least(n, m)];
    return answer;
}
