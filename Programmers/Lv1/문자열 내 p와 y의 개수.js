/*
  문제 : Level1 - 문자열 내 p와 y의 개수
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12916
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(s){
    var answer = true;
    // 문자열 s를 소문자로 바꾼뒤 문자단위로 쪼개어 arr 변수에 담는다
    const arr = s.toLowerCase().split('');
    // 문자 p,y 갯수를 셀 변수 선언 (0으로 초기화)
    let p = 0, y = 0;
    /* arr을 순회하며 p와 y갯수를 세어준다 */
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 'p') p++;
        else if(arr[i] === 'y') y++;
    }
    // answer는 p와 y의 갯수가 같거나 둘다 0이면 true 아니면 false를 반환
    answer = (p === y || (p === 0 && y === 0)) ? true : false;
    return answer;
}
