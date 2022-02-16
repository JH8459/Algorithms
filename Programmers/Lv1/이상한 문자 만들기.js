/*
  문제 : Level1 - 이상한 문자 만들기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12930
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(s) {
    var answer = '';
    // s 문자열을 ' '(공백) 단위로 구분하여 word 배열에 담아준다
    const word = s.split(' ');
    /* word 배열의 길이만큼 반복 수행한다 */
    for(let i=0; i<word.length; i++){
        /* word[i] 단어의 길이만큼 반복 수행한다 */
        for(let j=0; j<word[i].length; j++){
            /* 짝수 인덱스는 대문자로, 홀수는 소문자로 치환한다 */
            if(j%2 === 0) answer += word[i][j].toUpperCase();
            else answer += word[i][j].toLowerCase();
        }
        // 각 단어의 대소문자 치환과정이 끝나면 ' ' 단위로 띄어준다
        answer += ' ';
    }
    // 마지막 공백문자 제거 후 리턴한다
    return answer.slice(0, -1);
}
