/*
  문제 : Level1 - K번째수
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/42748
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(array, commands) {
    var answer = [];
    
    for(let i=0; i<commands.length; i++){   
        // commands 배열을 탐색하여
        // slice로 i번째 숫자부터 j번째 숫자까지 자르고
        // 정렬한다
        // k번째에 있는 수를 answer 배열에 push 해준다.
        const list  = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b)=>{return a-b});    
        answer.push(list[commands[i][2]-1])
    }
    
    // answer 배열을 return 한다.
    return answer;
}
