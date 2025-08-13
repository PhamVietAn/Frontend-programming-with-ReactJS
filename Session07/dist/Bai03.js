"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Animal name: ${this.name}`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("Meo Meo");
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("Gâu Gâu");
    }
}
const cat = new Cat("Chó");
cat.printName();
cat.makeNoise();
const dog = new Dog("Mè Mèo");
dog.printName();
dog.makeNoise();
