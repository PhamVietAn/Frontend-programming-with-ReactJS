"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    id;
    name;
    phone;
    license;
    constructor(id, name, phone, license) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.license = license;
    }
    getDetails() {
        console.log(`ID: ${this.id} - Tên: ${this.name} - Số điện thoại: ${this.phone} - Giấy phép lái xe: ${this.license}`);
    }
}
class Vehicle {
    vehicledId;
    brand;
    model;
    basePrice;
    status;
    constructor(vehicledId, brand, model, basePrice, status) {
        this.vehicledId = vehicledId;
        this.brand = brand;
        this.model = model;
        this.basePrice = basePrice;
        this.status = status;
    }
    updateStatus(status) {
        this.status = status;
    }
}
class Motorbike extends Vehicle {
    constructor(vehicledId, brand, model, basePrice, status) {
        super(vehicledId, brand, model, basePrice, status);
    }
}
