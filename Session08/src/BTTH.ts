class Book {
    public id: number;
    public title: string;
    public author: string;
    public year: number;

    constructor(id: number, title: string, author: string, year: number) {
        this.id = id; this.title = title; this.author = author; this.year = year
    }
}

class eBook extends Book {
    public fileSize: number;

    constructor(id: number, title: string, author: string, year: number, fileSize: number) {
        super(id, title, author, year); 
        this.fileSize = fileSize;
    }
}

class Library<T extends Book> {
    private books: T[] = [];

    addBook(book: T): void {
        if (this.books.find(b => b.id === book.id)) {
            console.log(`Sách ID ${book.id} đã tồn tại`);
            return;
        }
        this.books.push(book);
        console.log(`Đã thêm sách: ${book.title}`);
    }

    getBookById(id: number): T | undefined {
        return this.books.find(book => book.id === id);
    }

    removeBook(id: number): void {
        const index = this.books.findIndex(book => book.id === id);
        if (index !== -1) {
            console.log(`Đã xoá sách: ${this.books[index].title}`);
            this.books.splice(index, 1)
        } else {
            console.log("Không tìm thấy sách");
            
        }
    }

    updateBook(id: number, updatedBook: T): void {
        const index = this.books.findIndex(book => book.id === id);
        if (index !== -1) {
            this.books[index] = updatedBook;
            console.log(`Đã cập nhật sách ID ${id}`);
        } else {
            console.log(`Không tìm thấy sách ID ${id}`);
        }
    }

    listBooks(): T[] {
        return this.books;
    }

    findBooksByTitleOrAuthor(searchTerm: string): T[] {
        const term = searchTerm.toLowerCase();
        return this.books.filter(book =>
            book.title.toLowerCase().includes(term) ||
            book.author.toLowerCase().includes(term)
        );
    }

    getTotalBooks(): number {
        return this.books.length;
    }

    findBooksByYear(year: number): T[] {
        return this.books.filter(book => book.year === year);
    }
}