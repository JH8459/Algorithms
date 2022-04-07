
   
/*
  문제 : Level2 - 최솟값 만들기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12941
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(A,B){
    var answer = 0;
    /* A배열은 오름차순 정렬, B배열은 내림차순으로 정렬한다 */
    const ascA = A.sort((a,b) => a-b);
    const descB = B.sort((a,b) => b-a);
    /* 정렬한 배열의 길이가 0보다 크다면 각각 배열의 마지막 요소들을 꺼내어 곱한 값을 answer에 담아 반환한다 */
    while(ascA.length){
        answer += ascA.pop() * descB.pop();
    }
    return answer;
}
