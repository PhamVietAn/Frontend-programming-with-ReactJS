"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    username;
    password;
    isLogin = false;
    role;
    constructor(id, username, password, isLogin, role) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login() {
        this.isLogin = true;
        console.log("Đăng nhập thành công");
    }
    logout() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công");
        }
    }
}
class userAcc extends Account {
    status = 'active';
    constructor(id, username, password, isLogin, role, status) {
        super(id, username, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === 'active') {
            this.isLogin = true;
            console.log('Đăng nhập thành công');
        }
        else if (this.status === 'banned') {
            console.log('Tài khoản đã bị khóa');
        }
    }
}
class adminAcc extends Account {
    banUser(user, id) {
        if (user.id === id) {
            user.status = 'banned';
            console.log(`Người dùng ${user.username} đã bị cấm.`);
        }
        else {
            console.log(`Không tìm thấy người dùng có ID = ${id}.`);
        }
    }
}
const user1 = new userAcc(1, "userA", "passA", false, "user", "active");
const admin = new adminAcc(100, "adminA", "adminPass", false, "admin");
user1.login();
admin.banUser(user1, 1);
user1.login();
