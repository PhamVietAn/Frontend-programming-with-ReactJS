class Account {
    public id: number;
    public username: string;
    private password: string;
    public isLogin: boolean = false
    public role: string;

    constructor(id: number, username: string, password: string, isLogin: boolean, role: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }

    login(): void {
        this.isLogin = true;
        console.log("Đăng nhập thành công");
    }

    logout(): void {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công");
        }
    }
}

class userAcc extends Account {
    status: string = 'active';

    constructor(id: number, username: string, password: string, isLogin: boolean, role: string, status: string) {
        super(id, username, password, isLogin, role);
        this.status = status;
    }

    login(): void {
        if (this.status === 'active') {
            this.isLogin = true;
            console.log('Đăng nhập thành công');
        } else if (this.status === 'banned') {
            console.log('Tài khoản đã bị khóa');
        }
    }
}

class adminAcc extends Account {
    banUser(user: userAcc, id: number): void {
        if (user.id === id) {
            user.status = 'banned';
            console.log(`Người dùng ${user.username} đã bị cấm.`);
        } else {
            console.log(`Không tìm thấy người dùng có ID = ${id}.`);
        }
    }
}

const user1 = new userAcc(1, "userA", "passA", false, "user", "active");
const admin = new adminAcc(100, "adminA", "adminPass", false, "admin");

user1.login();
admin.banUser(user1, 1);
user1.login();