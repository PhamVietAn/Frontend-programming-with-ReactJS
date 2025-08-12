class Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    setName(newName: string): void {
        this.name = newName;
    }

    setId(newId: number): void {
        this.id = newId;
    }
}

let allStudents: Student[] = [
    new Student(1, 'An'),
    new Student(2, 'Bình'),
    new Student(3, 'Chi'),
    new Student(4, 'Dũng'),
    new Student(5, 'Hà'),
    new Student(6, 'Lan')
];

class Classroom {
    private students: Student[] = [];

    showStudents(): void {
        if (this.students.length === 0) {
            console.log('Lớp chưa có học sinh.');
            return;
        }
        console.log('Danh sách học sinh trong lớp:');
        this.students.forEach((student, idx) => {
            console.log(`${idx + 1}. ID: ${student.getId()}, Tên: ${student.getName()}`);
        });
    }

    addStudent(student: Student): void {
        this.students.push(student);
    }

    filterStudent(id: number): Student[] {
        return this.students.filter(student => student.getId() === id);
    }

    addStudentInClass(id: number): void {
        const idx = allStudents.findIndex(student => student.getId() === id);
        if (idx !== -1) {
            const student = allStudents[idx];
            if (student) {
                this.students.push(student);
                allStudents.splice(idx, 1);
            }
        } else {
            console.log(`Không tìm thấy học sinh với id ${id} trong danh sách tất cả học sinh.`);
        }
    }

    // Bổ sung phương thức removeStudent
    removeStudent(id: number): void {
        const idx = this.students.findIndex(student => student.getId() === id);
        if (idx !== -1) {
            const student = this.students[idx];
            if (student) {
                allStudents.push(student);
                this.students.splice(idx, 1);
                console.log(`Đã xóa học sinh id=${id} khỏi lớp và thêm lại vào danh sách tất cả học sinh.`);
            }
        } else {
            console.log(`Không tìm thấy học sinh với id ${id} trong lớp.`);
        }
    }

    // Bổ sung phương thức editStudent
    editStudent(id: number, newName: string, newId?: number): void {
        const student = this.students.find(student => student.getId() === id);
        if (student) {
            if (newId !== undefined) student.setId(newId);
            student.setName(newName);
            console.log(`Đã cập nhật thông tin học sinh id=${id}.`);
        } else {
            console.log(`Không tìm thấy học sinh với id ${id} trong lớp.`);
        }
    }
}

// Khởi tạo lớp và thêm học sinh như Bài 6
const classA = new Classroom();
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);

console.log('--- Trước khi thay đổi ---');
classA.showStudents();

// Xóa học sinh id=2 khỏi lớp
classA.removeStudent(2);
console.log('--- Sau khi xóa học sinh id=2 ---');
classA.showStudents();
console.log('Danh sách allStudents:', allStudents.map(s => `${s.getId()}-${s.getName()}`));

// Sửa thông tin học sinh id=1
classA.editStudent(1, 'An Nguyễn', 10);
console.log('--- Sau khi sửa thông tin học sinh id=1 ---');
classA.showStudents();
