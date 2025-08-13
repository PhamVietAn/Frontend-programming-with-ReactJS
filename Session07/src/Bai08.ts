class Account {
    public accountNumber: number;
    protected balance: number;
    protected history: string;
    protected status: string = 'active';

    constructor(accountNumber: number, balance: number, history: string = '', status: string = 'active') {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = history;
        this.status = status;
    }

    // Nạp tiền
    deposit(amount: number): void {
        if (this.status === 'active') {
            this.balance += amount;
            this.history += `Nạp: +${amount} VNĐ\n`;
            console.log(`Đã nạp ${amount} VNĐ vào tài khoản ${this.accountNumber}`);
        } else {
            console.log(`Không thể nạp vào tài khoản ${this.accountNumber}. Trạng thái: ${this.status}`);
        }
    }

    // Rút tiền
    withdraw(amount: number): void {
        if (this.status !== 'active') {
            console.log(`Không thể rút tiền. Tài khoản ${this.accountNumber} đang ở trạng thái: ${this.status}`);
            return;
        }
        if (amount > this.balance) {
            console.log(`Không thể rút ${amount} VNĐ. Số dư hiện tại chỉ còn ${this.balance} VNĐ`);
            return;
        }
        this.balance -= amount;
        this.history += `Rút: -${amount} VNĐ\n`;
        console.log(`Đã rút ${amount} VNĐ từ tài khoản ${this.accountNumber}`);
    }

    showHistory(): void {
        if (this.history === '') {
            console.log(`Tài khoản ${this.accountNumber} chưa có giao dịch nào.`);
        } else {
            console.log(`Lịch sử giao dịch của tài khoản ${this.accountNumber}:\n${this.history}`);
        }
    }
}

// Lớp CheckingAccount
class CheckingAccount extends Account {
    public overdraftLimit: number;

    constructor(accountNumber: number, balance: number, overdraftLimit: number, history: string = '', status: string = 'active') {
        super(accountNumber, balance, history, status);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): void {
        if (this.status !== 'active') {
            console.log(`Không thể rút tiền. Tài khoản ${this.accountNumber} đang ở trạng thái: ${this.status}`);
            return;
        }

        const maxWithdraw = this.balance + this.overdraftLimit;

        if (amount > maxWithdraw) {
            console.log(`Không thể rút ${amount} VNĐ. Tối đa có thể rút: ${maxWithdraw} VNĐ`);
            return;
        }

        this.balance -= amount;
        this.history += `Rút: -${amount} VNĐ\n`;
        console.log(`Đã rút ${amount} VNĐ từ tài khoản thanh toán ${this.accountNumber}`);
    }
}

// Test
const checkingAcc = new CheckingAccount(2001, 3000000, 2000000);

checkingAcc.deposit(1000000);
checkingAcc.withdraw(3500000);
checkingAcc.withdraw(5000000);
checkingAcc.showHistory();
