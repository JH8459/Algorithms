/*
  문제 : Level1 - 평균 구하기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12944
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(arr) {
    var answer = 0;
    // 배열안에 있는 값들의 총합을 담을 변수 선언
    let total = 0;
    // arr 배열을 순회하며 total에 배열의 값들을 더한다
    for(let i=0; i<arr.length; i++){
        total += arr[i];
    }
    // total 값을 arr 길이만큼 나누어 평균값을 구한다
    answer = total / arr.length;
    return answer;
}
