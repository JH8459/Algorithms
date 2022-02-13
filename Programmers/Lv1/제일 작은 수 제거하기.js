/*
  문제 : Level1 - 제일 작은 수 제거하기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12935
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(arr) {
    var answer = [];    
    // arr 배열의 최소값보다 큰 값들만 추려서 answer 배열에 담는다
    answer = arr.filter(el => el > Math.min(...arr));
    // arr의 배열의 길이가 1보다 같거나 작다면 [-1]을 리턴, 아닐 경우엔 answer 배열을 리턴한다
    return arr.length > 1 ? answer : [-1];
}
