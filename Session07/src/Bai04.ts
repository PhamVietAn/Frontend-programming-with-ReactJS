abstract class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    id: number;

    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`ID: ${this.id}`);
        
    }
}

class Teacher extends Person {
    subject: string;

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }

    displayInfo(): void {
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