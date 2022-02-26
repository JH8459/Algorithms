/*
  문제 : Level1 - 가운데 글자 가져오기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12903
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(s) {
    var answer = '';
    /* s문자열의 길이와 가운데 인덱스를 구한다 */
    const sLength = s.length;
    const centerIdx = Math.round(sLength / 2) - 1;
    // answer의 길이가 짝수면 2개의 단어를 반환, 1개면 1개의 단어만 반환한다
    answer = sLength % 2 === 0 ? s[centerIdx] + s[centerIdx+1] : s[centerIdx];
    return answer;
}
