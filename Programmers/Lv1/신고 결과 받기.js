/*
  문제 : Level1 - 신고 결과 받기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/92334
*/

/*---------------------------------------*/
// [Solution 1.] 시간 초과로 실패
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

// [Solution 2.] 중복 없는 배열 선언 로직을 제거 => 객체의 key에 담긴 value 배열에 해당 값이 있는지 검사하는 로직으로 변경
function solution(id_list, report, k) {
    /* id_list의 길이로 0이 채워진 배열(answer)과 유저와 신고대상 유저가 상세히 담긴 객체(detailReport) 선언 */
    var answer = Array(id_list.length).fill(0);
    const detailReport = {};
    // id_list의 요소들로 detailReport 객체의 key를 넣고 value는 빈 배열로 초기화한다
    id_list.map(el => detailReport[el] = []);
    /* report 요소들을 순회한다 */
    report.map(el => {
        // 공백(' ')으로 나눠 앞 요소는 userId, 뒷 요소는 reportId로 선언한다
        const [userId, reportId] = el.split(' ');
        /* 중복 신고는 제외 */
        if(!detailReport[reportId].includes(userId)) {
            // 신고당한 유저가 key 이고, 신고한 유저들을 value 배열에 담는다
            detailReport[reportId].push(userId);
        }
    });
    /* 객체의 키값을 순회한다 */
    for(const key in detailReport){
        /* 객체의 key에 담긴 배열의 길이가 k 이상이라면 이용 정지다 */
        if(detailReport[key].length >= k) {
            // 신고를 해서 이용정지 통보 메일의 갯수를 index에 맞춰 answer 배열에 담아준다
            detailReport[key].map(el => answer[id_list.indexOf(el)]++);
        }
    }
    // answer를 반환하며 종료한다
    return answer;
}

