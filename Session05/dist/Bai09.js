"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    year;
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getId() {
        return this.id;
    }
    setInfo(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getInfo() {
        return `"${this.title}" của ${this.author} (${this.year})`;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, idx) => {
            console.log(`${idx + 1}. ${book.getInfo()}`);
        });
    }
    deleteBookById(id) {
        const idx = this.books.findIndex(b => b.getId() === id);
        if (idx !== -1) {
            this.books.splice(idx, 1);
            console.log(`Đã xóa sách có id ${id}`);
        }
        else {
            console.log(`Không tìm thấy sách có id ${id}`);
        }
    }
    updateBookById(id, newTitle, newAuthor, newYear) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setInfo(newTitle, newAuthor, newYear);
            console.log(`Đã cập nhật sách có id ${id}`);
        }
        else {
            console.log(`Không tìm thấy sách có id ${id}`);
        }
    }
}
// Khởi tạo 5 quyển sách
const book1 = new Book(1, "Kiếp nào ta cũng tìm thấy nhau", "Brian L. Weiss", 1996);
const book2 = new Book(2, "Cô gái đến từ hôm qua", "Nguyễn Nhật Ánh", 1990);
const book3 = new Book(3, "5 Centimet trên giây", "Shinkai Makoto", 2014);
const book4 = new Book(4, "Khi Anh Chạy Về Phía Em", "Trúc Dĩ", 2017);
const book5 = new Book(5, "Cô gái năm ấy chúng ta cùng theo đuổi", "Giddens Ko", 2010);
// Khởi tạo thư viện và thêm sách
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
// Xem danh sách sách ban đầu
console.log('--- Danh sách ban đầu ---');
library.showBooks();
// Xóa sách có id = 3
library.deleteBookById(3);
// Cập nhật thông tin sách có id = 2
library.updateBookById(2, "Cô gái đến từ hôm qua (Tái bản)", "Nguyễn Nhật Ánh", 2024);
// Xem lại danh sách sách
console.log('--- Danh sách sau khi xóa và cập nhật ---');
library.showBooks();
