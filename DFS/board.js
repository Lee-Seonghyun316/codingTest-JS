function solution(board) {
  let answer = -1;
  const length = 4;
  let currentNumber = 0;
  let visited = [...board.map((item) => item.map(() => 0))];
  const dfs = (x, y, value) => {
    if (x > length - 1 || x < 0 || y > length - 1 || y < 0) {
      return;
    }
    if (visited[x][y] === 1) return;
    else {
      visited[x][y] = 1;
      if (currentNumber === board[x][y]) {
        value += 1;
        if (value > answer) {
          answer = value;
        }
        dfs(x - 1, y, value);
        dfs(x + 1, y, value);
        dfs(x, y - 1, value);
        dfs(x, y + 1, value);
      } else {
        return;
      }
    }
  };
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      currentNumber = board[i][j];
      count = 0;
      visited = [...board.map((item) => item.map(() => 0))];
      dfs(i, j, 0);
    }
  }
  if (answer === 1) {
    answer = -1;
  }
  return answer;
}
