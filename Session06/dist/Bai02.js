"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Job {
    type;
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Loại công việc: ${this.type}`);
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Fulltime");
    }
    calculateSalary() {
        return 10000000;
    }
}
class PartimeJob extends Job {
    workingHour;
    constructor(workingHour) {
        super("Parttime");
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
const parttime = new PartimeJob(80);
const fulltime = new FulltimeJob();
parttime.printType();
console.log(`Lương parttime: ${parttime.calculateSalary().toLocaleString()} VNĐ`);
fulltime.printType();
console.log(`Lương fulltime: ${fulltime.calculateSalary().toLocaleString()} VNĐ`);
