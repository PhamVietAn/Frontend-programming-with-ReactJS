class Book {
    private id: number;
    private title: string;
    private author: string;
    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId(): number {
        return this.id;
    }
    getTitle(): string {
        return this.title;
    }
    setInfo(title: string, author: string): void {
        this.title = title;
        this.author = author;
    }
    getInfo(): string {
        return `"${this.title}" của ${this.author}`;
    }
}

class Library {
    private books: Book[] = [];
    addBook(book: Book): void {
        this.books.push(book);
    }
    showBooks(): void {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, idx) => {
            console.log(`${idx + 1}. ${book.getInfo()}`);
        });
    }
    updateBookById(id: number, newTitle: string, newAuthor: string): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setInfo(newTitle, newAuthor);
            console.log(`Đã cập nhật sách có id ${id}`);
        } else {
            console.log(`Không tìm thấy sách có id ${id}`);
        }
    }
    searchBooksByTitle(title: string): void {
        const found = this.books.filter(book => book.getTitle().toLowerCase().includes(title.toLowerCase()));
        if (found.length === 0) {
            console.log(`Không tìm thấy sách với tên chứa: "${title}"`);
        } else {
            console.log(`Kết quả tìm kiếm cho "${title}":`);
            found.forEach((book, idx) => {
                console.log(`${idx + 1}. ${book.getInfo()}`);
            });
        }
    }
}

// Khởi tạo 5 quyển sách
const book1 = new Book(1,"Kiếp nào ta cũng tìm thấy nhau", "Brian L. Weiss");
const book2 = new Book(2,"Cô gái đến từ hôm qua", "Nguyễn Nhật Ánh");
const book3 = new Book(3,"5 Centimet trên giây", "Shinkai Makoto");
const book4 = new Book(4,"Khi Anh Chạy Về Phía Em", "Trúc Dĩ");
const book5 = new Book(5,"Cô gái năm ấy chúng ta cùng theo đuổi", "Cửu Bả Đao");

// Khởi tạo thư viện và thêm sách
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

// Tìm kiếm sách theo tên
library.searchBooksByTitle("Kiếp nào");
library.searchBooksByTitle("Cô gái");
library.searchBooksByTitle("Không có");
