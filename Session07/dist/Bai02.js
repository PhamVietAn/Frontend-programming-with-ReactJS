"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    speed;
    id;
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(number) {
        this.speed -= number;
    }
    speedUp(number) {
        this.speed += number;
    }
    showSpeed() {
        console.log(`Speed hiện tại: ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    gear;
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`Bicycle ID: ${this.id}`);
        console.log(`Bicycle Name: ${this.name}`);
        this.showSpeed();
        console.log(`Bicycle Gear: ${this.gear}`);
    }
}
const bicycle = new Bicycle("xe đạp địa hình", 20, 1, 5);
bicycle.showInfo();
console.log("===================================");
const bicycle2 = new Bicycle("xe đạp đua", 20, 1, 5);
bicycle2.speedUp(20);
bicycle2.showInfo();
console.log("===================================");
const bicycle3 = new Bicycle("xe đạp 3 bánh", 25, 1, 5);
bicycle3.slowDown(20);
bicycle3.showInfo();
