const clothes = [
  ["crow_mask", "face"],
  ["blue_sunglasses", "face"],
  ["smoky_makeup", "face"],
];

function solution(clothes) {
  const kinds = [{ kind: clothes[0][1], num: 1 }];
  for (let i = 1; i < clothes.length; i++) {
    for (let j = 0; j < kinds.length; j++) {
      if (clothes[i][1] === kinds[j].kind) {
        kinds[j].num += 1;
        break;
      }
      if (j === kinds.length - 1) {
        kinds.push({ kind: clothes[i][1], num: 1 });
        break;
      }
    }
  }
  let multiply = 1;
  for (let i = 0; i < kinds.length; i++) {
    multiply *= kinds[i].num + 1;
  }
  const answer = multiply - 1;
  return answer;
}

console.log(solution(clothes));
