function solution(numbers, target) {
  let answer = 0;
  const graph = [];
  const check = [];
  const arr = numbers;
  const len = numbers.length;
  for (let i = 0; i < len; i++) {
    //O(n)
    graph.push([...arr]);
    const zeroArr = arr.map(() => 0);
    check.push(zeroArr);
    arr.shift();
  }
  const stack = [];
  const dfs = (x, y, plus) => {
    if (graph[x] && graph[x][y]) {
      while (graph.length < len) {
        plus ? stack.push(graph[x][y]) : stack.push(-graph[x][y]);
        if (graph[x + 1][y]) dfs(x + 1, y, true);
      }
      if (stack.length === len) {
        const sum = stack.reduce((sum, crr) => {
          return sum + crr;
        }, 0);
        if (sum === target) {
          answer += 1;
        }
        stack.pop();
        if (graph[x][y - 1]) {
          dfs(x, y - 1, false);
        } else {
          stack.pop();
        }
      }
    } else {
      return;
    }
  };
  dfs(0, 0, true);

  return answer;
}

console.log(solution([4, 1, 2, 1], 4));
