"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = "hello world";
function removeDuplicateChars(s) {
    return Array.from(new Set(s.split(''))).join('');
}
console.log(removeDuplicateChars(str));
//# sourceMappingURL=PTIT_CNTT2_IT104_Session03_Bai07.js.map