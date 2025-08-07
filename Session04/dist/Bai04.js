"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleUnionType(value) {
    if (typeof value === 'string') {
        console.log(`${value.length} ký tự`);
    }
    else if (typeof value === 'number') {
        if (value % 2 === 0) {
            console.log('Đây là số chẵn');
        }
        else {
            console.log('Đây là số lẻ');
        }
    }
}
handleUnionType("demo123");
handleUnionType(10);
handleUnionType(11);
//# sourceMappingURL=Bai04.js.map