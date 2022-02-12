
/*
  문제 : Level1 - 하샤드 수
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12947
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(x) {
    var answer = true;
    // 문자열로 치환 후 자릿수마다 나누어 배열에 저장
    const arr = String(x).split('');
    // 배열의 합을 저장할 변수 선언
    let sum = 0;
    
    // 배열을 순회하며 변수 sum에 자릿수 합을 더한다
    for(let i=0; i<arr.length; i++) {
        sum += Number(arr[i]);
    }
    
    // x를 sum으로 나누어 떨어지면 하샤드 수이다.
    answer = (x % sum == 0) ? true : false;
    return answer;
}
