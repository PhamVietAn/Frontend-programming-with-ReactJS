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

    registerMember(id: number, name: string, contact: string): void {
        const existed = this.members.find(m => m.id === id);
        if (existed) {
            console.log(`Thành viên với id ${id} đã tồn tại.`);
            return;
        }
        const member = new Member(id, name, contact);
        this.members.push(member);
        console.log(`Đã đăng ký thành viên mới: ${name}`);
    }

    blockMember(id: number): void {
        const member = this.members.find(m => m.id === id);
        if (member) {
            member.status = 'blocked';
            console.log(`Đã khóa tài khoản thành viên id=${id}`);
        } else {
            console.log(`Không tìm thấy thành viên với id ${id}`);
        }
    }

    showMembers(): void {
        if (this.members.length === 0) {
            console.log('Chưa có thành viên nào trong thư viện.');
            return;
        }
        console.log('Danh sách thành viên trong thư viện:');
        this.members.forEach(member => {
            console.log(`ID: ${member.id}, Tên: ${member.name}, Liên hệ: ${member.contact}, Trạng thái: ${member.status}`);
        });
    }
}

const library = new Library();
library.registerMember(1, 'Nguyễn Văn A', '0123456789');
library.registerMember(2, 'Trần Thị B', '0987654321');
library.registerMember(3, 'Lê Văn C', '0111222333');
library.showMembers();
library.blockMember(2);
console.log('--- Sau khi khóa thành viên id=2 ---');
library.showMembers();
