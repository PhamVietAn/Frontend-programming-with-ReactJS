class Employee {
    public name: string;
    protected company: string;
    private phone: number;
    constructor(name: string, company: string, phone: number) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(): void {
        console.log(`Tên: ${this.name}, Công ty: ${this.company}, Số điện thoại: ${this.phone}`);
    }
}

const emp = new Employee("Nguyễn Văn A", "FPT", 123456789);
emp.printInfo();