/*
  문제 : Level2 - 피보나치 수
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12945
*/

/*---------------------------------------*/
// [Solution 1.] 시간 초과로 실패
function solution(n) {
    var answer = 0;
    /* 피보나치 수를 구하는 재귀함수 선언 */
    const getFibonacci = (n) => {
        if(n < 2) return n;
        return getFibonacci(n-1) + getFibonacci(n-2);
    }
    /* answer에 n번째 피보나치수를 1234567로 나눈 결과값을 담아 반환한다 */
    answer = getFibonacci(n) % 1234567;
    return answer;
}

// [Solution 2.] n번째 피보나치수를 구한 뒤 1234567로 나누는 로직이 아닌, 매번 피보나치수를 1234567로 나눈 나머지값으로 피보나치수 구하는 연산을 실행하는 로직으로 변경
function solution(n) {
    var answer = 0;
    // 최초 F(0)값과 F(1)값을 담은 변수 선언, 추후 F(n)을 구하기 위해 하위 피보나치 수들을 계산해가며 저장해갈 예정
    let f1 = 0, f2 = 1;
    /* 2~n까지 반복 수행 */
    for(let i = 2; i <= n; i++){
        // answer에 현재 피보나치 수를 1234567을 나눈 값을 저장한다
        answer = (f1 + f2) % 1234567;
        // 다음 피보나치수 계산을 위해 f1 = f2로 치환한다
        f1 = f2;
        // 그리고 f2는 현재 피보나치수를 담아준다
        f2 = answer;
    }
    // n번째 피보나치수를 구한 뒤 1234567로 나누는게 아닌, 매번 피보나치수를 1234567로 나눈값으로 피보나치수 연산을 진행하므로
    // F(50) 이상의 큰 수 대응이 가능하다 
    return answer;
}
