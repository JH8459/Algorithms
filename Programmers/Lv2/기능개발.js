/*
  문제 : Level2 - 기능개발
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/42586
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(progresses, speeds) {
    var answer = [];
    // 맨 앞에 있는 기능의 작업 진도율
    let progress = progresses[0];
    // checkProgress: 작업 진도를 체크하는 변수(progresses 길이와 같아질때 까지 반복)
    // deployCnt: 한번의 배포에 배포하는 작업의 갯수를 담는 변수
    let checkProgress = 0, deployCnt = 0;
    while(true){
        /* 맨 앞 작업 진도가 100보다 크다면 deployCnt, checkProgress를 증가시킨 뒤 맨 앞 작업 진도율을 바꾸어 준다 */
        if(progress >= 100){
            deployCnt++;
            checkProgress++;
            progress = progresses[checkProgress];
        }
        /* 맨 앞 작업 진도가 100보다 작다면 다음을 실행한다 */
        else {
            /* deployCnt가 0보다 크고 맨 앞 작업 진도가 100 이하라면 방금 배포가 끝났다  */
            if(deployCnt > 0) {
                // 정답 배열에 배포 한 작업 숫자를 넣어 준뒤, deployCnt를 0으로 초기화 한다
                answer.push(deployCnt);
                deployCnt = 0;
                // 탈출케이스(checkProgress 변수가 총 작업 갯수와 같다면) 반복문 탈출
                if(checkProgress === progresses.length) break;
            }
            // 맨 앞 작업 진도 속도를 변경해 준다 
            progress += speeds[checkProgress];
            /* 모든 작업 속도를 speeds에 맞춰 올려준다 */
            for(let i=0; i<progresses.length; i++){
                progresses[i] += speeds[i];
            }
        }
    }
    return answer;
}
