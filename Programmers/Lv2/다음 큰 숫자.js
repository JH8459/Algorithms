/*
  문제 : Level2 - 다음 큰 숫자
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12911
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(n) {
    var answer = 0;
    /* num을 전달인자로 받는 1의 갯수를 세어줄 함수 구현 */
    const getOneNumber = (num) => {
        /* num을 2진수로 바꿔준 뒤, 각 문자단위로 쪼갠 배열 binaryNumArr과 1의 갯수를 세어줄 count 변수도 선언한다 */
        const binaryNumArr = num.toString(2).split('');
        let count = 0;
        /* binaryNumArr 배열의 각각 요소를 문자 '1'과 비교후 같다면 count를 증가시킨다 */
        binaryNumArr.map(el => {
            if(el === '1') count++;
        });
        // count를 반환한다 (binaryNumArr 배열의 1의 갯수를 담는 변수)
        return count;
    }
    // 기준이 될 자연수 n의 2진수로 변환했을 때의 1의 갯수를 담는 standardOneNumber 변수 선언
    const standardOneNumber = getOneNumber(n);
    /* n보다 크고 1,000,000 이하의 자연수 순회 */
    for(let i=n+1; i<=1000000; i++){
        /* 2진수 i의 1의 갯수와 standardOneNumber가 같다면 answer에 현재 i를 담고 반복문을 종료한다 */
        if(getOneNumber(i) === standardOneNumber){
            answer = i;
            break;
        } 
    }
    // answer를 반환 후 종료
    return answer;
}
