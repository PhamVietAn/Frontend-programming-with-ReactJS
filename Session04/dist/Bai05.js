"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printStaffMember(staff) {
    console.log(`Nhân viên: ${staff.name} (${staff.age} tuổi), Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`);
}
const staffMember = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeId: "EMP001",
    department: "Kế toán"
};
printStaffMember(staffMember);
//# sourceMappingURL=Bai05.js.map