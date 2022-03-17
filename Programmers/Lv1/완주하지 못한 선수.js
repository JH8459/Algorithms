/*
  문제 : Level1 - 완주하지 못한 선수
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/42576
*/

/*---------------------------------------*/
// [Solution 1.] => 시간복잡도 탈락
function solution(participant, completion) {
    var answer = '';
    /* 완주한 선수 completion 배열을 순회한다 */
    for(let el of completion){
        /* participant 배열 내부값중 완주자가 있다면 삭제한다 */
        const idx = participant.indexOf(el)
        participant.splice(idx, 1);
    }
    /* answer에 남은 participant 배열 값을 넣어 반환한다 */
    answer = String(...participant);
    return answer;
}
// [Solution 2.]
function solution(participant, completion) {
    var answer = '';
    /* participant와 completion 배열을 정렬 */
    participant.sort();
    completion.sort();
    /* 정렬된 참여 선수 participant 배열을 순회하며 완주한 선수와 다른 값이 나오면 비완주자므로 반환한다 */
    for(let i=0; i<participant.length; i++){
        if(participant[i] !== completion[i]) return answer = participant[i];
    }
}
