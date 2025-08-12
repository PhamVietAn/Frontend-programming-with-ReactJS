"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        return `Chiều rộng: ${this.width}, Chiều dài: ${this.height}`;
    }
}
const rect = new Rectangle("Hình chữ nhật", 10, 5);
console.log(rect.getName());
console.log(rect.getSize());
