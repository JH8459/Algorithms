/*
  문제 : Level1 - 실패율
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/42889
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(N, stages) {
    var answer = [];
    /* 스테이지에 도달한 사람(tryPeople), 스테이지를 클리어한 사람(clearPeople), 실패율을 계산할 배열(scoreArr) 선언 */
    let tryPeople = Array(N).fill(0);
    let clearPeople = Array(N).fill(0);
    let scoreArr = Array(N).fill(0);
    /* stages 배열을 순회한다 */
    for(let stage of stages){
        /* stage 값이 N보다 1크다면 모든 스테이지를 클리어한 것이므로 clearPeople 배열값 모든 인덱스 1씩 증가 */
        if(stage === N+1){
            for(let i=0; i<clearPeople.length; i++){
                clearPeople[i]++;
            }
        } 
        /* stage 값이 주어졌다면, 스테이지에 도달한 사람을 증가시킨 후 그 전 stage 는 클리어로 처리한다 */
        else {
            tryPeople[stage-1]++;
            for(let i=0; i<stage-1; i++){
                clearPeople[i]++;
            }
        }
    }
    /* scoreArr 배열엔 실패율(ratio)과 인덱스(index)값을 객체 형태로 저장해서 배열안에 넣어준다 */
    scoreArr = scoreArr.map((el, idx) => {
        const ratio = tryPeople[idx] / (clearPeople[idx] + tryPeople[idx]);
        const index = idx+1;
        return {ratio: ratio, index: index}
    });
    /* 실패율은 내림차순으로 담고, 실패율이 같은 경우 인덱스를 비교해서 인덱스는 오름차순으로 정렬한다 */
    scoreArr.sort((a,b)=>{
        if(a.ratio>b.ratio) return -1;
        else if (a.ratio<b.ratio) return 1;
        else{
            if(a.index>b.index) return 1;
            else return -1;
        }
    });
    /* 실패율값은 필요없으므로 인덱스 값만 반환하여 answer에 담아 반환한다 */
    answer = scoreArr.map(el => el.index);
    return answer;
}
