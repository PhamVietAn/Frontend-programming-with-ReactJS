interface Student {
    name: string;
    age: number;
    email: string;
}

const student: Student = {
    name: "Phạm Việt An",
    age: 19,
    email: "phaman@gmail.com"
};

function printStudent(sv: Student): void {
    console.log(`Tên tôi là ${sv.name}, tôi ${sv.age} tuổi và email của tôi là ${sv.email}.`);
}

printStudent(student);