function createObject<K extends string, V>(keys: K[], values: V[]): Record<K, V> {
    const result: Record<K, V> = {} as Record<K, V>;
    keys.forEach((key, index) => {
        if (index < values.length && values[index] !== undefined) {
            result[key] = values[index] as V;
        }
    });
    return result;
}

const keys = ["name", "age", "email"];
const values = ["Alice", 25, "alice@example.com"];
console.log(createObject(keys, values));