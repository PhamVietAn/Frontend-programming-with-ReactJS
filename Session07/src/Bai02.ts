class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;

    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    slowDown(number: number): void {
        this.speed -= number;
    }

    speedUp(number: number): void {
        this.speed += number;
    }

    showSpeed(): void {
        console.log(`Speed hiện tại: ${this.speed}`);
    }
}

class Bicycle extends Vehicle {
private gear: number

    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }

    showInfo(): void {
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