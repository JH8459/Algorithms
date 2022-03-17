/*
  문제 : Level1 - 최소직사각형
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/86491
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(sizes) {
    var answer = 0;
    // sizes 배열 내부값들을 오름차순으로 정렬
    const sortSizes = sizes.map((el) => {
        return el.sort((a,b)=>a-b);
    });
    /* 2차원 배열중 작은값들을 minArr에 담고, 큰값은 maxArr에 담는다 */
    let minArr = [];    
    let maxArr = [];
    for(let el of sortSizes){
        minArr.push(el[0]);
        maxArr.push(el[1]);
    }
    /* minArr 중 가장 큰값과 maxArr 중 가장 큰값을 곱해서 결과를 반환한다 */
    answer = Math.max(...minArr) * Math.max(...maxArr);
    return answer;
}
