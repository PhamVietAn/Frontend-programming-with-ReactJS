function hasUniqueCharacters(word: string): boolean {
  const charSet = new Set<string>();
  for (const char of word) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
}

function findLongWord(sentence: string): string {
  const words = sentence.split(' ');
  let longestWord = '';

  for (const word of words) {
    if (hasUniqueCharacters(word)) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  }

  return longestWord;
}

const input = "hello world apple banana orange pumpkin cucumber";

const result = findLongWord(input);
console.log(result);