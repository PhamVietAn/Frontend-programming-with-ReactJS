interface changeSpeed {
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}

class Vehicle implements changeSpeed {
    private speed: number;
    private readonly step: number = 10; 
    constructor() {
        this.speed = 0;
    }
    speedUp(): void {
        this.speed += this.step;
        console.log(`Tăng tốc: tốc độ hiện tại là ${this.speed}`);
    }
    slowDown(): void {
        this.speed = Math.max(0, this.speed - this.step);
        console.log(`Giảm tốc: tốc độ hiện tại là ${this.speed}`);
    }
    stop(): void {
        this.speed = 0;
        console.log(`Dừng lại: tốc độ hiện tại là ${this.speed}`);
    }
}

