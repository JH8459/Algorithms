/*
  문제 : Level2 - 올바른 괄호
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12909
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(s){
    var answer = true;
    /* 문자열 s를 brackets 변수에 글자 단위로 쪼개어 배열에 담고, 괄호가 열렸을 경우를 셀 openBracket 변수를 선언한다 */
    const brackets = [...s];
    let openBracket = 0;
    // brackets 배열의 첫번째 값이 닫는 괄호 ')' 라면 false 값을 반환 후 함수 종료
    if(brackets[0] === ')') return false;
    /* brackets 배열을 순회하며 괄호가 열고 닫히는 경우를 체크한다 */
    for(let bracket of brackets){
        /* 여는 괄호가 나오면 openBracket값을 증가시키고, 닫는 괄호가 나오고 openBracket값이 0보다 크다면 1 감소시킨다 */
        if(bracket === '(')  openBracket++;
        else if(openBracket > 0 && bracket === ')') openBracket--;
    }
    /* openBracket 값이 0과 정확히 일치하면 괄호의 쌍이 맞고 아닐 경우 쌍이 맞지 않으므로 answer에 담아 반환한다 */
    answer = (openBracket === 0) ? true : false;
    return answer;
}
