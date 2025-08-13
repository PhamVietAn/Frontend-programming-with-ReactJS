abstract class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract makeNoise(): void;

    printName(): void {
        console.log(`Animal name: ${this.name}`);
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeNoise(): void {
        console.log("Meo Meo");
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeNoise(): void {
        console.log("Gâu Gâu");
    }
}

const cat = new Cat("Chó");
cat.printName();
cat.makeNoise();

const dog = new Dog("Mè Mèo");
dog.printName();
dog.makeNoise();