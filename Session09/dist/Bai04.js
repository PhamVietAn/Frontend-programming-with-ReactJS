"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function withDefault(value) {
    return value !== undefined ? value : "default";
}
console.log(withDefault());
console.log(withDefault(42));
console.log(withDefault(true));
