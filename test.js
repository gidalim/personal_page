// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

//- 문자열 s의 길이 : 50 이하의 자연수
//- 문자열 s는 알파벳으로만 이루어져 있습니다.

// spaghetticode


function solution(s) {

  s = s.toUpperCase();

  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'P') {
      num++;
    }
    if (s[i] === 'Y') {
      num--;
    }
  }
  result = (num === 0);

  return result;

}
// 위가 예제로 주어진 풀이

function solution(s) {

  const p = s.replace(/[^p]/gi, '').length;
  const y = s.replace(/[^y]/gi, '').length;
  return p === y;

}

//내가 생각했던 예제를 고민했는데 마침 이러한 풀이를 하는 사람도 있었다.