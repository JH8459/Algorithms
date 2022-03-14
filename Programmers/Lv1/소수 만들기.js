/*
  문제 : Level1 - 소수 만들기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12977
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(nums) {
    var answer = 0;
    /* 소수 판별 함수 선언 */
    const isPrime = (n) => {
        /* 1과 자기자신을 제외한 모든 수로 나눠떨어진다면 소수가 아니다 */
        for (let i = 2; i < n; i++) {
          if (n % i === 0) return false;
        }
        return true;
    };
    /* 3중 for문으로 3가지 숫자를 선택하는 경우의 수로 나오는 숫자를 소수 판별한다 */
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                /* 3가지 숫자의 합이 소수인지 아닌지 판별 후 맞다면 answer값을 1 증가시킨다 */
                const sum = nums[i] + nums[j] + nums[k];
                if(isPrime(sum)) answer++;
            }
        }
    }
    return answer;
}
