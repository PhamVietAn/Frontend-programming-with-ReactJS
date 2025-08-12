"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    id;
    title;
    author;
    stock;
    status;
    constructor(id, title, author, stock, status = 'available') {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    id;
    name;
    contact;
    lendedBooks = [];
    status;
    constructor(id, name, contact, status = 'active') {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
    }
}
class LendedBook {
    memberId;
    bookId;
    dueDate;
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    books = [];
    members = [];
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        if (this.books.length === 0) {
            console.log('Thư viện chưa có sách nào.');
            return;
        }
        console.log('Danh sách sách trong thư viện:');
        this.books.forEach(book => {
            console.log(`ID: ${book.id}, Tiêu đề: ${book.title}, Tác giả: ${book.author}, Số lượng: ${book.stock}, Tình trạng: ${book.status}`);
        });
    }
}
const library = new Library();
const book1 = new Book(1, 'Lập trình C++', 'Nguyễn Văn A', 5);
const book2 = new Book(2, 'JavaScript cơ bản', 'Trần Thị B', 3);
const book3 = new Book(3, 'Python nâng cao', 'Lê Văn C', 2);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.showBooks();
