"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    speed;
    step = 10;
    constructor() {
        this.speed = 0;
    }
    speedUp() {
        this.speed += this.step;
        console.log(`Tăng tốc: tốc độ hiện tại là ${this.speed}`);
    }
    slowDown() {
        this.speed = Math.max(0, this.speed - this.step);
        console.log(`Giảm tốc: tốc độ hiện tại là ${this.speed}`);
    }
    stop() {
        this.speed = 0;
        console.log(`Dừng lại: tốc độ hiện tại là ${this.speed}`);
    }
}
