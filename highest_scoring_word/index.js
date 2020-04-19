function high(x){
  const words = x.split(' ');
  let maxScore = 0;
  let maxWord = '';
  words.map(word => {
    const wordScore = word.toUpperCase().split('').reduce(
      (score, char) => score += char.charCodeAt() - 64, 0
    );
    (wordScore > maxScore) && ( maxScore = wordScore, maxWord = word )
  });
  return maxWord;
}