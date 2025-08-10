class Animal {
    private name: string;
    protected age: number;
    public species: string;
    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    speek(): void {
        console.log("Phát ra âm thanh");
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getAge(): number {
        return this.age;
    }

    setAge(age: number): void {
        this.age = age;
    }
}

class Dog extends Animal {
    public breed: string;
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }
    speek(): void {
        console.log("Gâu gâu");
    }
}

class cat extends Animal {
    public breed: string;
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }
    speek(): void {
        console.log("Meo meo");
    }
}

class bird extends Animal {
    public breed: string;
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }
    speek(): void {
        console.log("Chíp chíp");
    }
}

let randomAnimal = new Animal("animal", 10, "mammal");
console.log(randomAnimal.getName());
console.log(randomAnimal.getAge());
console.log(randomAnimal.species);

let dog = new Dog("Buddy", 5, "dog", "Golden Retriever");
console.log(dog.getName());
console.log(dog.getAge());
console.log(dog.species);
console.log(dog.breed);
console.log(dog.speek());
