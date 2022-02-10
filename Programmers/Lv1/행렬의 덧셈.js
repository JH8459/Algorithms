/*
  문제 : Level1 - 행렬의 덧셈
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12950
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(arr1, arr2) {
    var answer = [];
    
    /* 2중 for문으로 arr을 탐색 -> arr[i] 탐색 */
    // arr 탐색
    for(let i=0; i<arr1.length; i++){
        let temp = [];  // answer에 넣을 temp 배열 선언
        // arr[i] 탐색
        for(let j=0; j<arr1[i].length; j++){
            // 배열안의 배열의 요소를 더해준뒤 temp 배열에 push
            temp.push(arr1[i][j] + arr2[i][j]); 
        }
        // temp 배열을 answer 배열안에 집어 넣어준다.
        answer.push(temp);
    }
    // answer 리턴하여 풀이 종료
    return answer;
}
