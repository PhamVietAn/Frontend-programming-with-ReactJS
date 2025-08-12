"use strict";
// Khái niệm
/*
    Abstract method là phương thức chỉ khai báo mà không có phần thân, bắt buộc các lớp con phải override (cài đặt lại). Chỉ được khai báo trong abstract class.
    Method thông thường là phương thức có phần thân, có thể dùng chung cho các lớp con hoặc override nếu muốn.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Khi nào dùng
/*
    Dùng abstract method khi muốn ép buộc tất cả lớp con phải cài đặt logic riêng cho phương thức đó (ví dụ: move(), sound() của các loài động vật).
    Dùng method thông thường khi muốn cung cấp sẵn logic mặc định hoặc logic dùng chung cho các lớp con (ví dụ: getDetails(), feed()).
*/
class Animal {
    getDetails() {
        return "Thông tin động vật";
    }
}
class Dog extends Animal {
    sound() {
        return "Gâu gâu";
    }
}
