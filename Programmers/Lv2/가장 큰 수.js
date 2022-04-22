/*
  문제 : Level2 - 가장 큰 수
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/42746
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(numbers) {
    var answer = '';
    // 모든 배열의 합을 구하는 reduce 메서드 (배열 내부가 0으로 가득찬 경우 '0'을 리턴해주어야 한다)
    const arrSum = numbers.reduce((acc, cur) => acc += cur);
    // 모든 배열 내부의 값을 문자열로 바꾸는 map 메서드
    const strArr = numbers.map((el) => el.toString());
    // 문자열을 더한값을 내림차순으로 구한다 ex) '4' + '40' = '440', '40' + '4' = '404'
    answer = strArr.sort((a,b) => (b+a) - (a+b)).join('');
    // arrSum이 값이 존재하면 answer를 리턴하고 아니라면 '0'을 리턴
    return arrSum ? answer : '0';
}
