/*
  문제 : Level1 - [1차] 비밀지도
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/17681
*/

/*---------------------------------------*/
// [Solution 1.]
function solution(n, arr1, arr2) {
    var answer = [];
    /* arr1의 값들을 각각 2진수로 변경 후 n자리수에 맞춰 1값은 #, 그외 값은 공백으로 변경처리 한다 */
    const arr1Binary = arr1.map((el) => el.toString(2));
    const arr1Map = arr1Binary.map((el) => {
        let temp = '';
        /* n보다 el의 길이가 짧으면 앞에 공백을 넣어 맞춰 준다 */
        while(el.length < n){
            el = ' ' + el;
        }
        /* el 내부를 반복문으로 1일경우에는 #을 아닐 경우 temp 변수에 공백을 넣는다 */ 
        for(let char of el){
            if(char === '1') temp += '#';
            else temp += ' ';
        }
        // 2진수 0과1이 #과 공백으로 변경처리된 temp 변수를 반환한다
        return temp;
    });
    /* arr2도 arr1과 같이 2진수 -> 지도로 변경처리 한다 */
    const arr2Binary = arr2.map((el) => el.toString(2));
    const arr2Map = arr2Binary.map((el) => {
        let temp = '';
        while(el.length < n){
            el = ' ' + el;
        }
        for(let char of el){
            if(char === '1') temp += '#';
            else temp += ' ';
        }
        return temp;
    });
    /* arr1Map과 arr2Map을 합쳐준뒤 answer에 담는다 */
    for(let i=0; i<n; i++){
        let temp = '';
        for(let j=0; j<n; j++){
            if(arr1Map[i][j] === '#') temp += '#';
            else if(arr2Map[i][j] === '#') temp += '#';
            else temp += ' ';
        }
        answer.push(temp);
    }
    return answer;
}
