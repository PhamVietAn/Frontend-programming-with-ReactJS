class Customer {
    private id: number;
    private name: string;
    private phone: string;
    private license: string;

    constructor(id: number, name: string, phone: string, license: string) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.license = license;
    }

    getDetails(): void {
        console.log(`ID: ${this.id} - Tên: ${this.name} - Số điện thoại: ${this.phone} - Giấy phép lái xe: ${this.license}`);
    }
}

abstract class Vehicle {
    private vehicledId: number;
    brand: string;
    model: string;
    basePrice: number;
    status: string;

    constructor(vehicledId: number, brand: string, model: string, basePrice: number, status: string) {
        this.vehicledId = vehicledId;
        this.brand = brand;
        this.model = model;
        this.basePrice = basePrice;
        this.status = status;
    }

    updateStatus(status: string): void {
        this.status = status;
    }

    abstract calculateSurcharge(days: number): number
}

class Motorbike extends Vehicle {
    constructor(vehicledId: number, brand: string, model: string, basePrice: number, status: string) {
        super(vehicledId, brand, model, basePrice, status);
    }
}