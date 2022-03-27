/*
  문제 : Level1 - 키패드 누르기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/67256
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(numbers, hand) {
    var answer = '';
    // 키패드 다이얼간 거리를 재기위한 2차원 배열 변수선언(dialNumber)
    const dialNumber = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['*', '0', '#']];
    /* 현재 좌우 엄지 위치를 표기하기 위한 변수선언(leftThumb, rightThumb) */
    let leftThumb = '*';
    let rightThumb = '#';
    /* 두 점사이 거리를 구하기 위한 함수선언(getDistance) */
    const getDistance = (a, b) => {
        /* 두 점의 인덱스를 지니고 있는 배열선언(aIndex, bIndex) */
        let aIndex = [];
        let bIndex = [];
        /* dialNumber 배열을 순회하며 전달 받은 a,b가 위치하는 인덱스값을 각각 a~bIndex 배열안에 넣어준다 */
        for(let i=0; i<dialNumber.length; i++){
            if(dialNumber[i].indexOf(String(a)) >= 0) aIndex = [i, dialNumber[i].indexOf(String(a))];
            if(dialNumber[i].indexOf(String(b)) >= 0) bIndex = [i, dialNumber[i].indexOf(String(b))];
        }
        // 두 점 사이의 거리를 반환한다 (대각선길이는 구현하지 않으며 점과 점사이 가로 + 세로 길이)
        return (Math.abs(aIndex[0] - bIndex[0]) + Math.abs(aIndex[1] - bIndex[1]));
    }
    /* 최초 전달받은 numbers 배열을 순회한다 */
    for(let number of numbers){
        /* 숫자가 1,4,7일 경우 좌측 엄지를 사용한다 */
        if(number === 1 || number === 4 || number === 7) {
            leftThumb = number;
            answer += 'L';
        } 
        /* 숫자가 3,6,9일 경우 좌측 엄지를 사용한다 */
        else if(number === 3 || number === 6 || number === 9) {
            rightThumb = number;
            answer += 'R';
        } 
        /* 그 외 중앙 키패드 숫자일 경우 조건을 따져 처리한다 */
        else {
            /* 각각 엄지와 현재 숫자 사이의 거리를 담는 변수를 선언한다(leftDistance, rightDistance) */
            const leftDistance = getDistance(number, leftThumb);
            const rightDistance = getDistance(number, rightThumb);
            /* 우측 엄지가 가까운 경우 */
            if(leftDistance > rightDistance) {
                rightThumb = number;
                answer += 'R';
            } 
            /* 좌측 엄지가 가까운 경우 */
            else if(leftDistance < rightDistance) {
                leftThumb = number;
                answer += 'L';
            } 
            /* 거리가 같다면 이용자가 어떤 손잡이(전달인자 hand 변수확인)인지 확인 후 분기처리한다 */
            else {
                if(hand === 'right') {
                    rightThumb = number;
                    answer += 'R';
                } else {
                    leftThumb = number;
                    answer += 'L';
                }
            }
        }
    }
    // answer값을 반환하며 종료한다
    return answer;
}
