interface perseon {
    name: string;
    age: number;
}

interface employee {
    employeeId: string;
    department: string;
}

type StaffMenber = perseon & employee;

function printStaffMember(staff: StaffMenber): void {
    console.log(`Nhân viên: ${staff.name} (${staff.age} tuổi), Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`);
}

const staffMember: StaffMenber = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeId: "EMP001",
    department: "Kế toán"
};
printStaffMember(staffMember);