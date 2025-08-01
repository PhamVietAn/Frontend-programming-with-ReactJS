const students = [
  { id: 1, name: "Nguyễn A" },
  { id: 2, name: "Trần B" },
  { id: 3, name: "Lê C" }
];

students.forEach(student => {
  console.log(`Họ tên: ${student.name}! Mã số: ${student.id}.`);
});
