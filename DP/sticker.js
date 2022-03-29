function solution(sticker) {
  let answer = 0;
  if (sticker.length == 1) return sticker[0];
  const includedFirstArr = sticker.map(() => 0);
  const oppositeArr = sticker.map(() => 0);

  includedFirstArr[0] = sticker[0];
  includedFirstArr[1] = includedFirstArr[0];
  for (let i = 2; i < sticker.length - 1; i++) {
    includedFirstArr[i] =
      includedFirstArr[i - 2] + sticker[i] > includedFirstArr[i - 1]
        ? includedFirstArr[i - 2] + sticker[i]
        : includedFirstArr[i - 1];
  }
  oppositeArr[1] =
    oppositeArr[oppositeArr.length - 1] + sticker[1] > oppositeArr[0]
      ? oppositeArr[oppositeArr.length - 1] + sticker[1]
      : oppositeArr[0];
  for (let i = 2; i < sticker.length; i++) {
    oppositeArr[i] =
      oppositeArr[i - 2] + sticker[i] > oppositeArr[i - 1]
        ? oppositeArr[i - 2] + sticker[i]
        : oppositeArr[i - 1];
  }
  answer =
    includedFirstArr[includedFirstArr.length - 2] >
    oppositeArr[includedFirstArr.length - 1]
      ? includedFirstArr[includedFirstArr.length - 2]
      : oppositeArr[includedFirstArr.length - 1];
  return answer;
}
