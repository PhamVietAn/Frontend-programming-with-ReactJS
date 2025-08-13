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

const user1 = new userAcc(1, 'userA', '123456', false, 'user', 'active');
const user2 = new userAcc(2, 'userB', 'abcdef', false, 'user', 'banned');

console.log('--- Thử đăng nhập user1 (active) ---');
user1.login();
user1.logout();

console.log('--- Thử đăng nhập user2 (banned) ---');
user2.login();