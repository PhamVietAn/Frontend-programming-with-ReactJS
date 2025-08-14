function checkCondition<T extends boolean>(value: T): void {
    console.log(value ? "Xin chào" : "Tạm biệt");
}

const isHello: boolean = false;
checkCondition(isHello);
