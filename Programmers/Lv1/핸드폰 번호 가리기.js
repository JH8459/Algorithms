/*
  문제 : Level1 - 핸드폰 번호 가리기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12948
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(phone_number) {
    var answer = '';
    
    /* 정규식을 이용한 풀이 */
    // 뒤 4자리를 제외한 문자열은 *로 치환
    const masking_number = phone_number.slice(0,-4).replace(/[0-9]/g,'*')
    // 뒤 4자리는 그대로 보여준다
    const show_number = phone_number.slice(-4)
    
    // 두 문자열을 연결한 뒤 반환한다
    answer = masking_number + show_number
    
    return answer;
}
