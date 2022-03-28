function solution(numbers, target) {
  let answer = 0;
  const zeroUpArray = numbers.filter((item) => item !== 0);
  const zeroDownArray = zeroUpArray.map((item) => -item);
  const stack = [];
  let x = 0;
  const dfs = () => {
    while (numbers.length > stack.length) {
      stack.push(zeroUpArray[x]);
      x += 1;
    }
    x -= 1;
    if (stack.length === numbers.length) {
      const sum = stack.reduce((sum, crr) => sum + crr, 0);
      if (sum === target) {
        answer += 1;
      }
      while (stack.pop() < 0) {
        x -= 1;
        if (x < 0) return;
      }
      stack.push(zeroDownArray[x]);
      x += 1;
      dfs();
    }
  };
  dfs();
  return answer;
}

console.log(solution([4, 1, 2, 1], 4));
