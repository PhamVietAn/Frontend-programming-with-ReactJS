"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createObject(keys, values) {
    const result = {};
    keys.forEach((key, index) => {
        if (index < values.length && values[index] !== undefined) {
            result[key] = values[index];
        }
    });
    return result;
}
const keys = ["name", "age", "email"];
const values = ["Alice", 25, "alice@example.com"];
console.log(createObject(keys, values));
