"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    id;
    age;
    email;
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
const students = [];
students.push(new Student(1, 19, "an@gmail.com"));
students.push(new Student(2, 19, "quynhanh@gmail.com"));
students.push(new Student(3, 19, "chi@gmail.com"));
students.forEach(sv => {
    console.log(`ID: ${sv.id}, Tuổi: ${sv.age}, Email: ${sv.email}`);
});
