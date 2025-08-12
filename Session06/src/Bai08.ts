class Book {
    id: number;
    title: string;
    author: string;
    stock: number;
    status: string;

    constructor(id: number, title: string, author: string, stock: number, status: string = 'available') {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}

class Member {
    id: number;
    name: string;
    contact: string;
    lendedBooks: LendedBook[] = [];
    status: string;

    constructor(id: number, name: string, contact: string, status: string = 'active') {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
    }
}

class LendedBook {
    memberId: number;
    bookId: number;
    dueDate: Date;

    constructor(memberId: number, bookId: number, dueDate: Date) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}

class Library {
    books: Book[] = [];
    members: Member[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    showBooks(): void {
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
