"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    year;
    company;
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
const vehicle1 = new Vehicle("Toyota Camry", 2025, "Toyota");
const vehicle2 = new Vehicle("Honda SH", 2025, "Honda");
console.log(`Tên: ${vehicle1.name}, Năm SX: ${vehicle1.year}, Hãng: ${vehicle1.company}`);
console.log(`Tên: ${vehicle2.name}, Năm SX: ${vehicle2.year}, Hãng: ${vehicle2.company}`);
