/*
  문제 : Level1 - 소수 찾기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12921
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(n) {
    var answer = 0;
    /* 에라토스테네스의 체 */
    // 전달받은 n만큼 크기를 가진 1로 가득찬 배열을 생성한다
    const arr = new Array(n+1).fill(true);
    /* 2부터(1은 소수가 아니므로 2부터) 반복문을 수행하며 값을 수정한다 */ 
    for(let i = 2; i <= n; ++i){
        // 소수가 아닌 인덱스는 건너뛴다.
        if(arr[i] === false) continue; 
        // 어떤 수의 배수는 소수가 아니므로 false값으로 변경
        for(let j = i * 2; j <= n; j += i) arr[j] = false;
    }
    // true값은 소수이므로 arr배열의 true값의 갯수를 구한다. (1은 소수가 아니므로 2부터)
    for(let i = 2; i <= n; ++i){
        if(arr[i] === true){
            answer++;
        }
    }
    return answer;
}
