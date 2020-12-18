/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  const queue = [];
  queue.push([beginWord, 1]);
  while (queue.length) {
    const [word, level] = queue.shift();
    if (endWord === word) return level;
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const newWord =
          word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        if (wordSet.has(newWord)) {
          queue.push([newWord, level + 1]);
          wordSet.delete(newWord);
        }
      }
    }
  }
  return 0;
};
