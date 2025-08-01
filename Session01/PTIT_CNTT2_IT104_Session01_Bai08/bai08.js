function insertArray(arr1, arr2, pos) {
    if (pos < 0 || pos > arr1.length) {
        console.log('Vị trí chèn không hợp lệ!');
        return null;
    }
    return [
        ...arr1.slice(0, pos),
        ...arr2,
        ...arr1.slice(pos)
    ];
}

console.log(insertArray([1,2,3,7,8], [4,5,6], 3));
console.log(insertArray(['a','b','e','f'], ['c','d'], 2));
