type CallBack = (n: number) => void;

const caculate = (a: number, b: number, cb: CallBack) => {
    const result = a + b;
    cb(result);
}

const callbackFnc = (n: number) => {
    console.log("ket qua la: " + n);
}
caculate(5, 6, callbackFnc);