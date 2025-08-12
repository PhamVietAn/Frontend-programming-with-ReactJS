// Interface IAnimal
interface IAnimal {
    name: string;
    age: number;
    category: string;
    sound(): string;
    getDetails(): string;
    move(): string;
    feed(): string;
}

// Abstract class Animal
abstract class Animal implements IAnimal {
    private _name: string;
    private _age: number;
    category: string;
    foodType: string;
    private _lastCare: Date | null = null;
    private _healthStatus: string = "Tốt";
    constructor(name: string, age: number, category: string, foodType: string) {
        this._name = name;
        this._age = age;
        this.category = category;
        this.foodType = foodType;
    }
    get name() { return this._name; }
    get age() { return this._age; }
    set age(value: number) { this._age = value; }
    get lastCare() { return this._lastCare; }
    set lastCare(date: Date | null) { this._lastCare = date; }
    get healthStatus() { return this._healthStatus; }
    set healthStatus(status: string) { this._healthStatus = status; }
    abstract sound(): string;
    abstract move(): string;
    feed(): string {
        return `${this._name} đang ăn (${this.foodType})`;
    }
    getDetails(): string {
        return `Tên: ${this._name}, Tuổi: ${this._age}, Thể loại: ${this.category}`;
    }
}

// Lớp con Mammal (Thú có vú)
class Mammal extends Animal {
    private _furColor: string;
    constructor(name: string, age: number, furColor: string, foodType: string = "ăn cỏ hoặc ăn thịt") {
        super(name, age, "Thú có vú", foodType);
        this._furColor = furColor;
    }
    get furColor(): string { return this._furColor; }
    set furColor(color: string) { this._furColor = color; }
    sound(): string {
        return `${this.name} kêu: "gầm" hoặc "sủa"`;
    }
    move(): string {
        return `${this.name} đang chạy`;
    }
    getDetails(): string {
        return super.getDetails() + `, Màu lông: ${this._furColor}`;
    }
}

// Lớp con Bird (Chim)
class Bird extends Animal {
    private _wingSpan: number;
    constructor(name: string, age: number, wingSpan: number, foodType: string = "ăn côn trùng hoặc hạt") {
        super(name, age, "Chim", foodType);
        this._wingSpan = wingSpan;
    }
    get wingSpan(): number { return this._wingSpan; }
    set wingSpan(span: number) { this._wingSpan = span; }
    sound(): string {
        return `${this.name} kêu: "hót"`;
    }
    move(): string {
        return `${this.name} đang bay`;
    }
    getDetails(): string {
        return super.getDetails() + `, Sải cánh: ${this._wingSpan}cm`;
    }
}

// Lớp con Reptile (Bò sát)
class Reptile extends Animal {
    private _venomous: boolean;
    constructor(name: string, age: number, venomous: boolean, foodType: string = "ăn thịt hoặc côn trùng") {
        super(name, age, "Bò sát", foodType);
        this._venomous = venomous;
    }
    get venomous(): boolean { return this._venomous; }
    set venomous(v: boolean) { this._venomous = v; }
    sound(): string {
        return `${this.name} kêu: "khè"`;
    }
    move(): string {
        return `${this.name} đang bò`;
    }
    getDetails(): string {
        return super.getDetails() + `, Có độc: ${this._venomous ? "Có" : "Không"}`;
    }
}

class Zookeeper {
    private animals: Animal[] = [];
    careForAnimal(animal: Animal): void {
        animal.lastCare = new Date();
        animal.healthStatus = "Đã kiểm tra sức khỏe, tình trạng tốt";
        console.log(`Đã chăm sóc cho ${animal.name} lúc ${animal.lastCare?.toLocaleString()}`);
    }
    addAnimal(animal: Animal): void {
        this.animals.push(animal);
    }
    report(animal: Animal): void {
        console.log(`Báo cáo cho ${animal.name}:`);
        console.log(animal.getDetails());
        console.log(`Tình trạng sức khỏe: ${animal.healthStatus}`);
        console.log(`Thời gian chăm sóc gần nhất: ${animal.lastCare ? animal.lastCare.toLocaleString() : "Chưa chăm sóc"}`);
        console.log(animal.feed());
    }
}

const animals: Animal[] = [
    new Mammal("Chó", 5, "Nâu"),
    new Bird("Đại bàng", 3, 200),
    new Reptile("Rắn hổ mang", 2, true)
];

console.log("--- Đa hình: move() và sound() ---");
for (const animal of animals) {
    console.log(animal.move());
    console.log(animal.sound());
}

const dog = animals[0] as Mammal;
dog.furColor = "Đen";
console.log(dog.getDetails());

dog.age = 6;
console.log(`Tuổi mới của chó: ${dog.age}`);

// Zookeeper
const keeper = new Zookeeper();
for (const animal of animals) {
    keeper.addAnimal(animal);
    keeper.careForAnimal(animal);
    keeper.report(animal);
}