function withDefault<T = string>(value?: T): T {
    return value !== undefined ? value : "default" as T;
}

console.log(withDefault());
console.log(withDefault(42));
console.log(withDefault(true));