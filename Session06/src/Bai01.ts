abstract class Shape {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    abstract getSize(): string;
}

class Rectangle extends Shape {
    private width: number;
    private height: number;
    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize(): string {
        return `Chiều rộng: ${this.width}, Chiều dài: ${this.height}`;
    }
}

const rect = new Rectangle("Hình chữ nhật", 10, 5);
console.log(rect.getName());
console.log(rect.getSize());