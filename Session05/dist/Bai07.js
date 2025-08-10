"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    setInfo(title, author) {
        this.title = title;
        this.author = author;
    }
    getInfo() {
        return `"${this.title}" của ${this.author}`;
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
    updateBookById(id, newTitle, newAuthor) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setInfo(newTitle, newAuthor);
            console.log(`Đã cập nhật sách có id ${id}`);
        }
        else {
            console.log(`Không tìm thấy sách có id ${id}`);
        }
    }
}
// Khởi tạo 5 quyển sách
const book1 = new Book(1, "Kiếp nào ta cũng tìm thấy nhau", "Brian L. Weiss");
const book2 = new Book(2, "Cô gái đến từ hôm qua", "Nguyễn Nhật Ánh");
const book3 = new Book(3, "5 Centimet trên giây", "Shinkai Makoto");
const book4 = new Book(4, "Khi Anh Chạy Về Phía Em", "Trúc Dĩ");
const book5 = new Book(5, "Cô gái năm ấy chúng ta cùng theo đuổi", "Cửu Bả Đao");
// Khởi tạo thư viện và thêm sách
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
// Sửa thông tin sách có id = 3
library.updateBookById(3, "Điều tuyệt vời nhất của chúng ta", "Bát Nguyệt Trường An");
library.showBooks();
