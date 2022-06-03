/*
  문제 : Level2 - 위장
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/42578
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(clothes) {
    var answer = 1;
    // clothes 2차원 배열을 객체로 변환 하기 위한 clothesObjList 객체 선언
    const clothesObjList = {};
    /* clothes 배열을 순회하며 객체를 키값(키:의상의 종류, 값: 해당 의상 종류의 갯수)쌍으로 채워 넣는다. */
    clothes.map((cloth) => {
        if (!clothesObjList[cloth[1]]) clothesObjList[cloth[1]] = 0;
        clothesObjList[cloth[1]] += 1;
    })
    // clothesObjList 객체의 키로 이뤄진 keyArr 배열 생성
    const keyArr = Object.keys(clothesObjList);
    /* (1번 옷 갯수 + 1) * (2번 옷 갯수 + 1) * (3번 옷 갯수 + 1) * ... - 1 */
    for(const key of keyArr) {
        answer *= clothesObjList[key] + 1
    }
    return answer -1;
}
