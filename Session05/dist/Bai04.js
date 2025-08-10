"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    id;
    name;
    year;
    company;
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
const vehicle1 = new Vehicle(1, "Honda SH mode", 2025, "Honda");
console.log(vehicle1);
