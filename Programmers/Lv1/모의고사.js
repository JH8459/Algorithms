/*
  문제 : Level1 - 모의고사
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/42840
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(answers) {
    var answer = [];
    /* 1~3번 수포자가 찍는 패턴 선언 */
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    /* 1~3번 수포자가 맞힌 문제수 담을 변수 선언 */
    let oneAnswer = 0;
    let twoAnswer = 0;
    let threeAnswer = 0;
    /* 각 수포자들이 맞힌 문제수를 카운팅한다 */
    for(let i=0; i<answers.length; i++){
        if(answers[i] === one[i%one.length]) oneAnswer++
        if(answers[i] === two[i%two.length]) twoAnswer++
        if(answers[i] === three[i%three.length]) threeAnswer++
    }
    // 가장 많이 맞힌 수포자의 정답 수를 구한다
    const max = Math.max(oneAnswer, twoAnswer, threeAnswer);
    /* max값과 같다면 answer 배열에 담는다 */
    if(oneAnswer === max) answer.push(1);
    if(twoAnswer === max) answer.push(2);
    if(threeAnswer === max) answer.push(3);
    // answer 배열 오름차순 정렬 후 반환
    return answer.sort();
}
