"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
let allStudents = [];
class Classroom {
    students = [];
    showStudents() {
        if (this.students.length === 0) {
            console.log('Lớp chưa có học sinh.');
            return;
        }
        console.log('Danh sách học sinh trong lớp:');
        this.students.forEach((student, idx) => {
            console.log(`${idx + 1}. ID: ${student.getId()}, Tên: ${student.getName()}`);
        });
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.filter(student => student.getId() === id);
    }
    addStudentInClass(id) {
        const idx = allStudents.findIndex(student => student.getId() === id);
        if (idx !== -1) {
            const student = allStudents[idx];
            if (student) {
                this.students.push(student);
                allStudents.splice(idx, 1);
            }
        }
        else {
            console.log(`Không tìm thấy học sinh với id ${id} trong danh sách tất cả học sinh.`);
        }
    }
}
allStudents.push(new Student(1, 'An'), new Student(2, 'Bình'), new Student(3, 'Chi'), new Student(4, 'Dũng'), new Student(5, 'Hà'), new Student(6, 'Lan'));
const classA = new Classroom();
const classB = new Classroom();
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);
console.log('--- Lớp A ---');
classA.showStudents();
console.log('--- Lớp B ---');
classB.showStudents();
console.log('Tìm học sinh id=2 trong lớp A:', classA.filterStudent(2));
