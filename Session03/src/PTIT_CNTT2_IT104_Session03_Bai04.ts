let str1: string = "123";
let str2: number = 123;

//@ts-ignore
console.log(str1 == str2); // true, vì so sánh giá trị

//@ts-ignore
console.log(str1 === str2); // false, vì so sánh cả giá trị và kiểu dữ liệu
