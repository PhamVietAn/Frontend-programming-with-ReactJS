"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
// Test
const person = { name: "An", age: 20 };
const job = { title: "Developer", salary: 2000 };
const merged = mergeObjects(person, job);
console.log(merged);
