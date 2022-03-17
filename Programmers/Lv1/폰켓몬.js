/*
  문제 : Level1 - 폰켓몬
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/1845
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(nums) {
    var answer = 0;
    /* 중복없는 uniqueNums 배열을 만들어준다 */
    const uniqueNums = nums.filter((el, idx) => {
       return  nums.indexOf(el) === idx;
    });
    // nums의 1/2 값을 half 변수에 담는다
    const half = Math.floor(nums.length / 2);
    /* half와 uniqueNums 길이를 비교하여 answer에 담아 반환한다 */
    answer = half <= uniqueNums.length ? half : uniqueNums.length;
    return answer;
}
