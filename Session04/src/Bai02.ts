let Score : number[] = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];

let total : number = Score.reduce((acc, score) => acc + score, 0);

let average : number = total / Score.length;

console.log(`Điểm trung bình: ${average.toFixed(2)}`);
