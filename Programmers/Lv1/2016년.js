/*
  문제 : Level1 - 2016년
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12901
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(a, b) {
    var answer = '';
    /* 요일 & 월(누적 일수를 계산해야하므로 0~12월 선언) 초기 선언 */
    const day = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
    const month = [0,31,29,31,30,31,30,31,31,30,31,30,31];
    // totalDay는 a월까지 누적일수와 b를 합친 값이다.
    const totalDay = month.slice(0, a).reduce((a, b) => a + b) + b;
    /* totalDay를 7로 나눈 값을 인덱스로 갖는 day배열을 리턴한다. */
    answer = totalDay % 7;
    return day[answer];
}
