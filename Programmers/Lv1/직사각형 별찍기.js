/*
  문제 : Level1 - 직사각형 별찍기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/12969
*/

/*---------------------------------------*/
// [Solution 1.]
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    /* 2중 for문으로 *찍기 */ 
    for(let i=0; i<b; i++){
        // 세로줄 시작
        let star = "";  
        for(let j=0; j<a; j++){
            // 1줄당 찍히는 가로 *의 갯수
            star += "*";  
        }
        // 1줄 완성 후 출력 -> 세로로 b번 반복하여 1줄당 가로 a개 줄의 별을 찍어준다
        console.log(star);  
    }
});
