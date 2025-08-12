"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Abstract class Animal
class Animal {
    _name;
    _age;
    category;
    foodType;
    _lastCare = null;
    _healthStatus = "Tốt";
    constructor(name, age, category, foodType) {
        this._name = name;
        this._age = age;
        this.category = category;
        this.foodType = foodType;
    }
    get name() { return this._name; }
    get age() { return this._age; }
    set age(value) { this._age = value; }
    get lastCare() { return this._lastCare; }
    set lastCare(date) { this._lastCare = date; }
    get healthStatus() { return this._healthStatus; }
    set healthStatus(status) { this._healthStatus = status; }
    feed() {
        return `${this._name} đang ăn (${this.foodType})`;
    }
    getDetails() {
        return `Tên: ${this._name}, Tuổi: ${this._age}, Thể loại: ${this.category}`;
    }
}
// Lớp con Mammal (Thú có vú)
class Mammal extends Animal {
    _furColor;
    constructor(name, age, furColor, foodType = "ăn cỏ hoặc ăn thịt") {
        super(name, age, "Thú có vú", foodType);
        this._furColor = furColor;
    }
    get furColor() { return this._furColor; }
    set furColor(color) { this._furColor = color; }
    sound() {
        return `${this.name} kêu: "gầm" hoặc "sủa"`;
    }
    move() {
        return `${this.name} đang chạy`;
    }
    getDetails() {
        return super.getDetails() + `, Màu lông: ${this._furColor}`;
    }
}
// Lớp con Bird (Chim)
class Bird extends Animal {
    _wingSpan;
    constructor(name, age, wingSpan, foodType = "ăn côn trùng hoặc hạt") {
        super(name, age, "Chim", foodType);
        this._wingSpan = wingSpan;
    }
    get wingSpan() { return this._wingSpan; }
    set wingSpan(span) { this._wingSpan = span; }
    sound() {
        return `${this.name} kêu: "hót"`;
    }
    move() {
        return `${this.name} đang bay`;
    }
    getDetails() {
        return super.getDetails() + `, Sải cánh: ${this._wingSpan}cm`;
    }
}
// Lớp con Reptile (Bò sát)
class Reptile extends Animal {
    _venomous;
    constructor(name, age, venomous, foodType = "ăn thịt hoặc côn trùng") {
        super(name, age, "Bò sát", foodType);
        this._venomous = venomous;
    }
    get venomous() { return this._venomous; }
    set venomous(v) { this._venomous = v; }
    sound() {
        return `${this.name} kêu: "khè"`;
    }
    move() {
        return `${this.name} đang bò`;
    }
    getDetails() {
        return super.getDetails() + `, Có độc: ${this._venomous ? "Có" : "Không"}`;
    }
}
class Zookeeper {
    animals = [];
    careForAnimal(animal) {
        animal.lastCare = new Date();
        animal.healthStatus = "Đã kiểm tra sức khỏe, tình trạng tốt";
        console.log(`Đã chăm sóc cho ${animal.name} lúc ${animal.lastCare?.toLocaleString()}`);
    }
    addAnimal(animal) {
        this.animals.push(animal);
    }
    report(animal) {
        console.log(`Báo cáo cho ${animal.name}:`);
        console.log(animal.getDetails());
        console.log(`Tình trạng sức khỏe: ${animal.healthStatus}`);
        console.log(`Thời gian chăm sóc gần nhất: ${animal.lastCare ? animal.lastCare.toLocaleString() : "Chưa chăm sóc"}`);
        console.log(animal.feed());
    }
}
const animals = [
    new Mammal("Chó", 5, "Nâu"),
    new Bird("Đại bàng", 3, 200),
    new Reptile("Rắn hổ mang", 2, true)
];
console.log("--- Đa hình: move() và sound() ---");
for (const animal of animals) {
    console.log(animal.move());
    console.log(animal.sound());
}
const dog = animals[0];
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
