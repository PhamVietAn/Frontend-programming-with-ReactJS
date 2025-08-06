"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toNumber(val) {
    if (typeof val === 'number')
        return val;
    const num = Number(val);
    return isNaN(num) ? null : num;
}
function addition(a, b) {
    const x = toNumber(a);
    const y = toNumber(b);
    if (x === null || y === null)
        return 'Dữ liệu không hợp lệ';
    return x + y;
}
function subtraction(a, b) {
    const x = toNumber(a);
    const y = toNumber(b);
    if (x === null || y === null)
        return 'Dữ liệu không hợp lệ';
    return x - y;
}
function multiplication(a, b) {
    const x = toNumber(a);
    const y = toNumber(b);
    if (x === null || y === null)
        return 'Dữ liệu không hợp lệ';
    return x * y;
}
function division(a, b) {
    const x = toNumber(a);
    const y = toNumber(b);
    if (x === null || y === null)
        return 'Dữ liệu không hợp lệ';
    if (y === 0)
        return 'Không thể chia cho 0';
    return x / y;
}
console.log(addition(5, '3'));
console.log(subtraction('10', 2));
console.log(multiplication('4', '2'));
console.log(division('8', '2'));
console.log(addition('abc', 2));
//# sourceMappingURL=PTIT_CNTT2_IT104_Session03_Bai08.js.map