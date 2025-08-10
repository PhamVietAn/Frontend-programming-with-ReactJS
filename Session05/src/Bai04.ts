class Vehicle {
    readonly id: number;
    public name: string;
    protected year: number
    private company: string;

    constructor(id: number ,name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
}

const vehicle1 = new Vehicle(1, "Honda SH mode", 2025, "Honda");

console.log(vehicle1);
