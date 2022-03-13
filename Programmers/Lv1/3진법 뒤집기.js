/*
  문제 : Level1 - 3진법 뒤집기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/68935
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(n) {
    var answer = 0;
    // 매개변수 n을 3진법으로 변경
    const base3 = n.toString(3);
    // 앞뒤 반전을 한 결과값을 도출해야하므로 앞자리부터 10진수로 바꾸어준다. (3의 i승값을 곱해준다.)
    for(let i=0; i<base3.length; i++){
        answer += base3[i] * Math.pow(3, i);
    }
    return answer;
}
