/*
  문제 : Level1 - 체육복
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/42862
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(n, lost, reserve) {
    var answer = 0;
    // n의 숫자만큼 1로 가득채워진 students 배열을 선언한다 (모두 1개의 티셔츠 상태)
    const students = Array(n).fill(1);
    /* lost 배열값과 일치하는 idx는 값을 1씩 빼고, reserve 배열과 일치하는 idx는 1씩 더해준다 (lost는 0, reserve는 2) */
    lost.map((el) => students[el-1]--);
    reserve.map((el) => students[el-1]++);
    /* students 배열을 순회하며 체육복 여유가 있는 학생을 찾는다 */
    for(let i=0; i<students.length; i++){
        /* 체육복 여유가 있다면 좌측 학생을 도와주고 도움이 필요없다면 우측학생을 도와준다 */
        if(students[i] === 2){
            if(i>0 && students[i-1]===0){
                students[i]--;
                students[i-1]++;
            } else if (i<students.length-1 && students[i+1]===0){
                students[i]--;
                students[i+1]++;
            }
        }
    }
    /* students 배열을 순회하며 0보다 값이 큰 학생들이 있다면 answer 값을 1씩 증가시킨다. */
    students.map((el) => {
        if(el>0) answer++;
    });
    return answer;
}
