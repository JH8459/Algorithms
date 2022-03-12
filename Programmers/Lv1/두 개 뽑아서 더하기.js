
/*
  문제 : Level1 - 두 개 뽑아서 더하기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/68644?language=javascript
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(numbers) {
    var answer = [];
    /* numbers 배열 내부값들을 모두 더해준 뒤, 중복되지 않은 값들은 answer에 넣어준다. */
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            const temp = numbers[i] + numbers[j];
            if(answer.indexOf(temp) === -1) answer.push(temp);
        }
    }
    /* answer 배열을 오름차순으로 정렬 후 반환 */
    answer.sort((a,b)=> a-b);
    return answer;
}
