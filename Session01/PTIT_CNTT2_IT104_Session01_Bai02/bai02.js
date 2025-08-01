const a = 5;
const arr = [1,2,3,4,5];

a = 10;

arr.push(6);

console.log(`Giá trị a sau khi gán lại: ${a}`);
console.log(`Mảng arr sau khi thêm phần tử: `,arr);

//console chạy bị lỗi Uncaught TypeError: Assignment to constant variable.

//const a = 5 là khai báo hằng số với giá trị là một số nguyên, khi dùng const với kiểu nguyên thuỷ giá trị của biến không thể bị gán lại. Vì vậy khi gán a bằng số khác sẽ báo lỗi
//const arr = [1,2,3,4,5] là khai báo hằng số với giá trị là một tham chiếu đến mảng trong bộ nhớ, khi dùng const với kiểu phức tạo không thể gán lại biến nhưng có thể thay đổi nội dung bên trong như sử dụng push()

 