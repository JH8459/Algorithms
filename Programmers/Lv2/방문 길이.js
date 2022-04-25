/*
  문제 : Level2 - 방문 길이
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/49994
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(dirs) {
    var answer = 0;
    /* 방향성을 담을 객체 move 선언 */
    const move = {
        U: [0, 1],
        D: [0, -1],
        R: [1, 0],
        L: [-1, 0]
    }
    // 현재 위치를 담을 배열 position 배열 선언
    let position = [0, 0];
    // 방문한 길을 저장할 visit 배열 선언
    const visit = [];
    /* 명령어 배열 dirs를 하나씩 해석한다 */
    for(let dir of dirs){
        /* dir 명령어 입력시 다음 위치정보를 담는 xPosition, yPosition 변수 선언 */
        let xPosition = position[0] + move[dir][0];
        let yPosition = position[1] + move[dir][1];
        // 범위를 벗어나면 명령어는 무시처리한다
        if(xPosition > 5 || xPosition < -5 || yPosition > 5 || yPosition < -5) continue;
        /* 방향성을 고려해야하므로 점->점으로 이동하는 한 길을 path1과 path2로 나누어 저장한다 */
        const path1 = `${position[0]}, ${position[1]}, ${xPosition}, ${yPosition}`;
        const path2 = `${xPosition}, ${yPosition}, ${position[0]}, ${position[1]}`;
        /* path1, path2가 visit배열에 둘다 존재하지 않는다면 visit배열에 path1,2를 담아준다 */
        if(!visit.includes(path1) && !visit.includes(path2)) {
            visit.push(path1);
            visit.push(path2)
        }
        // 현재 위치를 옮긴다
        position = [xPosition, yPosition];
    }
    // answer에 visit 배열의 길이를 2로 나눈값을 담아 반환한다
    answer = visit.length / 2;
    return answer;
}
