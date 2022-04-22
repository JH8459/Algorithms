
   
/*
  문제 : Level2 - 스킬트리
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/49993
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(skill, skill_trees) {
    var answer = 0;
    /* 선행스킬이 필요한 스킬들을 precedeSkillArr 변수에 넣어 간추린다 */
    const precedeSkillArr = skill_trees.map((tree) => {
        return tree.split('').filter((el) => skill.includes(el));
    });
    /* 선행스킬이 요구되는 스킬들이 담긴 이차원 배열을 확인한다 */
    precedeSkillArr.map((precedeSkill) => {
        // 스킬트리가 올바른지 유효성을 검사할 변수 isValid 선언
        let isValid = true;
        /* 선행스킬 일차원 배열을 반복문을 통해 확인한다 */
        for(let i=0; i<precedeSkill.length; i++){
            /* 인덱스가 서로 다르다면 올바르지 않은 스킬 트리이므로 isValid를 false로 두고 반복문 종료 */
            if(skill[i] !== precedeSkill[i]) {
                isValid = false;
                break;
            }
        }
        // isValid가 참이라면 answer를 1 증가 시킨다
        if(isValid) answer++;
    })
    // 최종 answer를 반환 후 종료
    return answer;
}
