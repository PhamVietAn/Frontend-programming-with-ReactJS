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
}
class eBook extends Book {
    fileSize;
    constructor(id, title, author, year, fileSize) {
        super(id, title, author, year);
        this.fileSize = fileSize;
    }
}
class Library {
    books = [];
    addBook(book) {
        if (this.books.find(b => b.id === book.id)) {
            console.log(`Sách ID ${book.id} đã tồn tại`);
            return;
        }
        this.books.push(book);
        console.log(`Đã thêm sách: ${book.title}`);
    }
    getBookById(id) {
        return this.books.find(book => book.id === id);
    }
    removeBook(id) {
        const index = this.books.findIndex(book => book.id === id);
        if (index !== -1) {
            console.log(`Đã xoá sách: ${this.books[index].title}`);
            this.books.splice(index, 1);
        }
        else {
            console.log("Không tìm thấy sách");
        }
    }
    updateBook(id, updatedBook) {
        const index = this.books.findIndex(book => book.id === id);
        if (index !== -1) {
            this.books[index] = updatedBook;
            console.log(`Đã cập nhật sách ID ${id}`);
        }
        else {
            console.log(`Không tìm thấy sách ID ${id}`);
        }
    }
    listBooks() {
        return this.books;
    }
    findBooksByTitleOrAuthor(searchTerm) {
        const term = searchTerm.toLowerCase();
        return this.books.filter(book => book.title.toLowerCase().includes(term) ||
            book.author.toLowerCase().includes(term));
    }
    getTotalBooks() {
        return this.books.length;
    }
    findBooksByYear(year) {
        return this.books.filter(book => book.year === year);
    }
}
