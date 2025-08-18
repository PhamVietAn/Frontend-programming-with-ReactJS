"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataStore {
    data = [];
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return this.data;
    }
    remove(index) {
        if (index >= 0 && index < this.data.length) {
            this.data.splice(index, 1);
        }
    }
}
const store = new DataStore();
store.add(1);
store.add(2);
store.add(3);
console.log(store.getAll());
store.remove(1);
console.log(store.getAll());
