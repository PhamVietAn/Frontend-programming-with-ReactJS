function sumArrays(...arrays) {
    return arrays.map(arr => arr.reduce((sum, val) => sum + val, 0));
}

const result = sumArrays([1,2], [6,7,8], [12,8]);
console.log(result);
