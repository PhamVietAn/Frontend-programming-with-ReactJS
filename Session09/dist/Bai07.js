"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateUser(user, updates) {
    if ("id" in updates) {
        throw new Error("Id cannot be changed");
    }
    return { ...user, ...updates };
}
const user = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};
const updates1 = { name: "Alice Johnson" };
console.log(updateUser(user, updates1));
const updates2 = { id: 2, name: "Alice Johnson" };
try {
    console.log(updateUser(user, updates2));
}
catch (error) {
    console.error(error.message);
}
