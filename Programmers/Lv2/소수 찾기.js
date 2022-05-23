/*
  문제 : Level2 - 소수 찾기
  문제출처 : https://programmers.co.kr/learn/courses/30/lessons/42839
*/

/*---------------------------------------*/
// [Solution 1.]

function solution(numbers) {
    var answer = 0;
    const numArr = numbers.split('');
    /* 소수를 찾는 함수 */
    const isPrime = (n) => {
        if(n < 2) return false;
        if(n === 2 || n ===3) return true;
        for(let i=2; i<=Math.sqrt(n); i++){
            if(n%i === 0) return false;
        }
        return true;
    }
    /* 경우의 수를 찾는 함수(순열) */
    const getPermutations = (arr, n) => {
        const results = []; 
        // nP1 이며, 1이면 의미 없기때문에 바로 arr 배열에 담긴 요소를 1개씩 반환한다. 
        if (n === 1) return arr.map(el => [el]); 
        arr.forEach((fixed, index, origin) => { 
            /* 순열에서는 조합과 달리 순서만 바뀌면 중복이 아니기때문에 기준값을 제외한 나머지 배열을 넣어준다. */
            // 나머지 배열을 기준으로 다시 순열을 구한다. 
            const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; 
            // 기준값(fixed)이 있기 때문에 선택하려는 개수에서 - 1 을 해준다. 
            const permutations = getPermutations(rest, n - 1); 
            // 기준값(fixed)에 순열(permutations)을 붙인다. 
            const attached = permutations.map(el => [fixed, ...el]); 
            // 붙인 값을 결과 값에 넣어준다. 
            results.push(...attached); 
        }); 
        return results;
    }   
    /* 모든 경우의 수를 찾는 함수 */
    const getAllPermutations = (arr) => { 
        const results = []; 
        /* 순열을 구하는 함수를 반복해준다 */
        arr.forEach((value, index, origin) => { 
            results.push(...getPermutations(origin, index + 1)); 
        }); 
        return results; 
    }
    // 2차원 배열값들을 문자열로 join한 뒤 정수형으로 바꾼 뒤, 중복값이 없는 set 객체로 반환한다
    const uniqueArr = new Set(getAllPermutations(numArr).map((el) => Number(el.join(''))));
    // isPrime 함수 적용시 true인 요소들만 추린 뒤 해당 배열의 길이를 구해준다
    answer = [...uniqueArr].filter((el) => isPrime(el)).length;
    return answer;
}
