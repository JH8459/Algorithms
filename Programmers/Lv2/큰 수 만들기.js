/*
  문제 : Level2 - 큰 수 만들기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/42883
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(number, k) {
    var answer = '';
    /* 숫자를 쌓을 stack 배열과 제거한 숫자의 수를 담을 k 변수 선언 */
    const stack = [];
    let count = 0;
    /* number 문자를 순회한다 */
    for(let i=0; i<number.length; i++){
        /* stack에 담긴 숫자가 존재한다면 반복문 수행 */
        while(stack.length){
            // 제거한 숫자의 수가 k와 같아지면 while 반복문 탈출
            if(count === k) break;
            /* stack에 담긴 마지막 수와 현재 수를 비교 후 현재 숫자가 크다면 stack의 값을 뺀 뒤 제거한 숫자 카운트를 늘린다 */
            if(stack[stack.length - 1] < number[i]){
                stack.pop();
                count++;
            } else { // 스택에 담긴 수가 더 크다면 while 반복문 탈출
                break;
            }
        }
        // stack에 현재 수를 담는다
        stack.push(number[i]);
    }
    // stack에 담긴 숫자들을 연결 뒤 k만큼 잘라서 반환한다
    answer = stack.join('').slice(0, number.length - k);
    return answer;
}
