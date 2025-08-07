
function isPrime(n: number): boolean {
    if (n < 2 || !Number.isInteger(n)) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function processInput(input: string | number | boolean): void {
    if (typeof input === 'string') {
        if (/^\d+$/.test(input)) {
            // Chuỗi toàn số
            const num = Number(input);
            console.log(num * num);
        } else {
            // Đếm ký tự chữ cái
            const match = input.match(/[a-zA-Z]/g);
            const count = match ? match.length : 0;
            console.log(`${count} ký tự chữ cái`);
        }
    } else if (typeof input === 'number') {
        if (isPrime(input)) {
            console.log('Là số nguyên tố');
        } else {
            console.log('Không phải số nguyên tố');
        }
    } else if (typeof input === 'boolean') {
        if (input) {
            console.log('Giá trị là true - tiến hành xử lý');
        } else {
            console.log('Giá trị là false - dừng xử lý');
        }
    }
}

processInput("123");
processInput("abc123!");
processInput(7);
processInput(10);
processInput(true);
processInput(false);
