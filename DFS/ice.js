const solution = (N, M, ices) => {
  const graph = [];
  ices.split("\n").forEach((ice) => {
    const array = ice.split("").map((item) => Number(item));
    graph.push(array);
  });
  const dfs = (x, y) => {
    if (x <= -1 || x >= N || y <= -1 || y >= M) {
      return false;
    }
    if (graph[x][y] === 0) {
      graph[x][y] = 1;
      dfs(x - 1, y);
      dfs(x + 1, y);
      dfs(x, y - 1);
      dfs(x, y + 1);
      return true;
    }
    return false;
  };

  let result = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (dfs(i, j)) {
        result += 1;
      }
    }
  }
  return result;
};

console.log(solution(3, 3, "001\n010\n101"));
