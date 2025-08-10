"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    age;
    species;
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    speek() {
        console.log("Phát ra âm thanh");
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}
class Dog extends Animal {
    breed;
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speek() {
        console.log("Gâu gâu");
    }
}
class cat extends Animal {
    breed;
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speek() {
        console.log("Meo meo");
    }
}
class bird extends Animal {
    breed;
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speek() {
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
