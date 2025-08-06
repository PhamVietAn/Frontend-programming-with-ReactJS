let num1: number = 8;
let num2: number = 3;
let num3: number;
let num4: string = "10";
let num5: boolean = true;

num3 = num1 + num2;
console.log(`Cộng: ${num1} + ${num2} = ${num3}`);

num3 = num1 - num2;
console.log(`Trừ: ${num1} - ${num2} = ${num3}`);

num3 = num1 * num2;
console.log(`Nhân: ${num1} * ${num2} = ${num3}`);

num3 = num1 / num2;
console.log(`Chia: ${num1} / ${num2} = ${num3}`);

let result = num4 + num5;
console.log(`Kết quả của '${num4}' + ${num5} là:`, result);

// Giải thích
// Khi cộng một chuỗi với một giá trị boolean, giá trị boolean sẽ được tự động chuyển thành chuỗi ('true' hoặc 'false'),
// sau đó hai chuỗi sẽ được nối lại với nhau. Ví dụ: "10" + true => "10true"
