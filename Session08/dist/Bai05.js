"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findFirst(arr, predicate) {
    return arr.find(predicate);
}
console.log(findFirst([1, 2, 5, 8, 9], x => x % 2 === 0));
