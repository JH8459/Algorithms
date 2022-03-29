/*
  문제 : Level1 - 신규 아이디 추천
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/72410
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(new_id) {
    var answer = '';
    let temp = '';
    /* 알파벳 대소문자 / 숫자 / 특수문자(-_) 을 찾기 위한 정규식 선언 */
    const alphabat = /[a-zA-Z]/;
    const number = /[0-9]/;
    const special = /[-_.]/;
    /* 1~2 단계 */
    for(let i=0; i<new_id.length; i++){
        // 1단계 : 모든 알파벳은 소문자로 치환해서 취급한다
        if(new_id[i].match(alphabat)) temp += new_id[i].toLowerCase();
        // 2단계 : 숫자는 취급한다
        else if(new_id[i].match(number)) temp += new_id[i];
        // 2단계 : 특수문자(-_.)는 취급한다
        else if(new_id[i].match(special)) temp += new_id[i];
    }
    /* 3단계 : 온점(.)은 2개 이상시 1개로 압축한다 */
    for(let i=0; i<temp.length; i++){
        if(temp[i] === '.'){
            if(temp[i + 1] === '.') continue;
        }
        answer += temp[i];
    }
    /* 4단계 : 마침표(.)가 처음이나 끝에 위치한다면 제거한다 */
    if(answer[0] === '.') answer = answer.slice(1);
    if(answer[answer.length - 1] === '.') answer = answer.slice(0,-1);
    // 5단계 : answer가 빈 문자열이라면 'a'를 대입한다
    if(answer === '') answer = 'a';
    /* 6단계 : answer의 길이가 16자 이상이면 15글자로 줄이고, 줄인 문자열의 마지막 글자가 온점(.)라면 제거한다 */
    if(answer.length > 15) {
        answer = answer.slice(0,15);
        if(answer[answer.length - 1] === '.') answer = answer.slice(0,-1);
    }
    /* 7단계 : answer의 길이가 2자 이하라면 마지막 문자를 길이가 3이 될 때까지 넣어준다 */
    if(answer.length < 3) {
        while(answer.length < 3) answer += answer.slice(-1);
    }
    // 최종 변화가 완료된 answer를 반환하며 종료한다
    return answer;
}

// [Solution 2.] 프로그래머스 풀이 참조 (정규식과 체이닝으로 간결한 풀이)
function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
