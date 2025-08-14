function findFirst<T>(arr: T[], predicate: (item: T) => boolean): T | undefined {
    return arr.find(predicate);
}

console.log(findFirst([1, 2, 5, 8, 9], x => x % 2 === 0));