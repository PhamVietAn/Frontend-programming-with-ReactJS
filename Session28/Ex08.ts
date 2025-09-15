const myFilter = (arr: any[], find: any, callback: (result: any[], original: any[]) => void) => {
    const result: any[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === find) {
            result.push(arr[i]);
        }
    }
    callback(result, arr);
};

const handleShow = (result: any[], original: any[]) => {
    console.log("Cac phan tu tim thay:", result);
    console.log("Mang da lap qua:", original);
};

const number = [1, 2, 3, 2, 2, 4, 5, 6];
myFilter(number, 2, handleShow);