/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */


var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;

  let beforeQueue = [[beginWord, 1]];
  let endQueue = new Map([[endWord, 1]]);
  const wordListSet = new Set(wordList);

  while (beforeQueue.length && endQueue.size) {
    if (beforeQueue.length > endQueue.size) {
      [beforeQueue, endQueue] = [Array.from(endQueue), new Map(beforeQueue)];
    }
    const currentLevelSize = beforeQueue.length;
    for (let i = 0; i < currentLevelSize; i++) {
      const [word, level] = beforeQueue.shift();

      for (let l = 0; l < word.length; l++) {
        for (let charCode = 97; charCode <= 122; charCode++) {
          const newWord = `${word.slice(0, l)}${String.fromCharCode(
            charCode
          )}${word.slice(l + 1)}`;
          if (endQueue.has(newWord)) {
            return endQueue.get(newWord) + level;
          }
          if (wordListSet.has(newWord)) {
            beforeQueue.push([newWord, level + 1]);
            wordListSet.delete(newWord);
          }
        }
      }
    }
  }
  return 0;
};