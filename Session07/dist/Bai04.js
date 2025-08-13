"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}
class Student extends Person {
    id;
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`ID: ${this.id}`);
    }
}
class Teacher extends Person {
    subject;
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Subject: ${this.subject}`);
    }
}
console.log("Student");
const std = new Student("John Doe", 12345);
std.displayInfo();
console.log("==============================");
console.log("Teacher");
const teacher = new Teacher("Nguyễn Quảng An", "Lập trình Frontend với ReactJS");
teacher.displayInfo();
