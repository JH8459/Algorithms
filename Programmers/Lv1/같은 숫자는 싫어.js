
/*
  문제 : Level1 - 같은 숫자는 싫어
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12906
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(arr)
{
    var answer = [];
    // arr배열의 요소중 현재값과 다음 인덱스값이 같지 않은 값들만 추려낸다
    answer = arr.filter((el, idx)=> el !== arr[idx+1])
    return answer;
}
