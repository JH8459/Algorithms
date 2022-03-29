/*
  문제 : Level1 - 신고 결과 받기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/92334
*/

/*---------------------------------------*/
// [Solution 1.] => 시간 초과로 실패
function solution(id_list, report, k) {
    /* 정답을 담을 배열(answer), 각 id가 신고한 유저를 담을 배열(reporter), 신고당한 횟수를 셀 배열(reported) 선언 */
    var answer = Array(id_list.length).fill(0);
    let reporter = Array(id_list.length).fill([]);
    let reported = Array(id_list.length).fill(0);
    // 최종 정지 된 아이디들을 담을 배열(stopId) 선언
    let stopId = [];
    /* 전달받은 report 배열의 중복값을 제거 한 뒤, 공백(' ') 단위로 쪼개어 준다 */
    const uniqueReport = report.filter((el, idx) => report.indexOf(el) === idx);
    const splitReport = uniqueReport.map(el => el.split(' '));
    /* 신고자와 신고당한 유저로 쪼개진 splitReport 배열을 순회한다 */
    for(let el of splitReport){
        // reporter 배열에는 신고자 index에 맞춰 신고한 유저를 넣어준다
        reporter[id_list.indexOf(el[0])] = [...reporter[id_list.indexOf(el[0])], el[1]];
        // reported 배열에는 신고당한 횟수를 센다
        reported[id_list.indexOf(el[1])]++;
    }
    /* 신고당한 횟수가 k보다 클 경우 정지유저 배열에 해당 값을 넣어준다 */
    reported.filter((el, idx) => {
       if(el>=k) stopId.push(id_list[idx]);
    });
    /* reporter 배열을 순회하며 정지시킨 유저의 결과메일 횟수를 answer배열에 담아준다 */
    for(let i=0; i<reporter.length; i++){
        let count = 0;
        for(let id of stopId){
            if(reporter[i].includes(id)) count += 1;
        }
        answer[i] = count;
    }
    // answer를 반환하며 종료한다
    return answer;
}

// [Solution 2.]


