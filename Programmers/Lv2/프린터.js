/*
  문제 : Level2 - 프린터
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/42587
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(priorities, location) {
    var answer = 0;
    // 우선 순위에 매칭되는 1 ~ N(priorities.length)까지의 문서 배열 생성
    const document = Array.from({length:priorities.length}, (v,i)=>i+1);
    // 삭제할 타겟 문서 선언
    const target = document[location];
    /* 문서 배열에 타겟이 존재하다면 반복문 수행 */
    while(document.includes(target)){
        // 우선순위 최대값을 찾는다
        const max = Math.max(...priorities);
        /* 현재 프린터 대기 문서중 맨 앞 문서가 최우선 순위라면 출력 후 출력 횟수를 증가시킨다 */
        if(priorities[0] === max) {
            /* 출력한 우선순위와 문서는 shift로 삭제한다 */
            priorities.shift();
            document.shift();
            answer++;
        }
        /* 맨 앞 문서의 출력 우선순위가 최우선 순위가 아니라면 뒤로 보낸다  */
        else {
            const temp1 = priorities.shift();
            const temp2 = document.shift();
            priorities.push(temp1);
            document.push(temp2);
        }
    }
    return answer;
}
