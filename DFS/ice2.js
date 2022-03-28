const solution = (M, N, array) => {
  let answer = 0;
  const graph = array;
  const dfs = (x, y) => {
    if (x <= -1 || x >= M || y <= -1 || y >= N) {
      return;
    }
    if (graph[x][y] === 0) {
      graph[x][y] = 1;
      dfs(x + 1, y);
      dfs(x - 1, y);
      dfs(x, y + 1);
      dfs(x, y - 1);
      answer += 1;
      return;
    }
  };
  dfs(0, 0);

  return answer;
};
console.log(
  solution(3, 3, [
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ])
);
