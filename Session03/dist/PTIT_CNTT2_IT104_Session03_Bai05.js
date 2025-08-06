"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = "Pham";
let lastName = "An";
function capitalize(str) {
    if (!str)
        return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
firstName = capitalize(firstName);
lastName = capitalize(lastName);
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
//# sourceMappingURL=PTIT_CNTT2_IT104_Session03_Bai05.js.map