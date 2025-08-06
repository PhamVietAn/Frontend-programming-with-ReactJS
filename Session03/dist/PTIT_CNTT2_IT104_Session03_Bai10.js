"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hasUniqueCharacters(word) {
    const charSet = new Set();
    for (const char of word) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }
    return true;
}
function findLongWord(sentence) {
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
//# sourceMappingURL=PTIT_CNTT2_IT104_Session03_Bai10.js.map