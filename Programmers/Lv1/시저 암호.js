/*
  문제 : Level1 - 시저 암호
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12926
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(s, n) {
    var answer = '';
    /* 문자열 s의 길이만큼 반복 수행한다 */
    for(let i=0; i<s.length; i++) { 
        // 한글자 단위로 ch 변수에 담는다
        let ch = s[i]; 
        /* 공백은 그냥 공백으로 처리, 소문자/대문자인 경우에는 ASCII 코드로 변환 후 정수 n값 만큼 민다*/
        if(ch === ' ') ch = ' '
        else if(ch === ch.toLowerCase()) { 
            ch = String.fromCharCode((ch.charCodeAt() - 'a'.charCodeAt() + n) % 26 + 'a'.charCodeAt());
        } else if(ch === ch.toUpperCase()) { 
            ch = String.fromCharCode((ch.charCodeAt() - 'A'.charCodeAt() + n) % 26 + 'A'.charCodeAt());
        } 
        answer += ch; 
    }
    return answer;
}
