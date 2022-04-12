/*
  문제 : Level2 - 행렬의 곱셈
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12949
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(arr1, arr2) {
    var answer = [];
    /* 행렬의 곱셈 3중 for문 */
    for(let i=0; i<arr1.length; i++){
        // tempArr은 arr1 행렬의 첫번째 행
        const tempArr = arr1[i];
        // answer 배열에 정답을 담을 빈 배열을 담아준다
        answer.push([]);
        /* 이차원 행렬 arr2[0]의 길이만큼 반복 수행한다 */
        for(let j=0; j<arr2[0].length; j++){
            // 행렬의 곱을 더해줄 임시 변수 temp 선언
            let temp = 0;
            for(let k=0; k<arr2.length; k++){
                // 행렬의 곱을 구해준다 (arr1 행렬의 k번째 요소 * arr2[k][j]값을 temp 변수에 계속 더해서 담아준다)
                temp += tempArr[k] * arr2[k][j];
            }
            // 한 행렬의 곱이 나왔으니 answer에 담긴 내부 배열에 temp값을 넣어준다
            answer[i].push(temp);
        }
    }
    // answer 최종 배열을 반환하여 함수 종료
    return answer;
}
