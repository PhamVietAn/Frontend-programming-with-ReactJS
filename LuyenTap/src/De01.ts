class Customer3 {
    id: number;
    name: string;
    email: string;
    shippingAddress: string;

    constructor(id: number, name: string, email: string, shippingAddress: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Shipping Address: ${this.shippingAddress}`;
    }
}

abstract class Product3 {
    id: number;
    name: string;
    price: number;
    stock: number;

    constructor(id: number, name: string, price: number, stock: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    sell(quantity: number): number {
        if (quantity > this.stock) {
            return 0;
        }
        this.stock -= quantity;
        return this.price * quantity;
    }

    restock(quantity: number): void {
        this.stock += quantity;
    }

    abstract getProductInfo(): string;

    abstract getShippingCost(distance: number): number;

    abstract getCategory(): string;
}

class ElectronicsProduct3 extends Product3 {
    warrantyPeriod: number;

    constructor(id: number, name: string, price: number, stock: number, warrantyPeriod: number) {
        super(id, name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }

    getProductInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Stock: ${this.stock}, Warranty: ${this.warrantyPeriod} tháng`;
    }

    getShippingCost(distance: number): number {
        return 50000;
    }

    getCategory(): string {
        return 'Electronics';
    }
}

class ClothingProduct3 extends Product3 {
    size: string;
    color: string;

    constructor(id: number, name: string, price: number, stock: number, size: string, color: string) {
        super(id, name, price, stock);
        this.size = size;
        this.color = color;
    }

    getProductInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Stock: ${this.stock}, Size: ${this.size}, Color: ${this.color}`;
    }

    getShippingCost(distance: number): number {
        return 25000;
    }

    getCategory(): string {
        return 'Clothing';
    }
}

class Order3 {
    orderId: number;
    customer: string;
    products: { product: Product3; quantity: number }[];
    totalAmount: number;

    constructor(orderId: number, customer: string) {
        this.orderId = orderId;
        this.customer = customer;
        this.products = [];
        this.totalAmount = 0;
    }

    getDetails(): string {
        let details = `Order ID: ${this.orderId}\nCustomer: ${this.customer}\nTotal Amount: ${this.totalAmount}\nDanh sách sản phẩm:`;
        if (this.products.length === 0) {
            details += '\nKhông có sản phẩm.';
        } else {
            this.products.forEach((item, idx) => {
                details += `\n${idx + 1}. ${item.product.getProductInfo()} - Số lượng: ${item.quantity}`;
            });
        }
        return details;
    }
}

class Store3 {
    products: Product3[] = [];
    customers: Customer3[] = [];
    orders: Order3[] = [];

    constructor(products: Product3[], customers: Customer3[], orders: Order3[]) {
        this.products = products;
        this.customers = customers;
        this.orders = orders;
    }

    addProduct(product: Product3): void {
        this.products.push(product);
    }

    addCustomer(name: string, email: string, address: string): void {
        const newCustomer = new Customer3(this.customers.length + 1, name, email, address);
        this.customers.push(newCustomer);
    }

    createOrder(customerID: number, productQuantities: { productId: number, quantity: number }[]): Order3 | null {
        const customer = this.customers.find(c => c.id === customerID);
        if (!customer) {
            return null;
        }

        const order = new Order3(this.orders.length + 1, customer.name);
        productQuantities.forEach(item => {
            const product = this.products.find(p => p.id === item.productId);
            if (product) {
                const total = product.sell(item.quantity);
                if (total > 0) {
                    order.products.push({ product, quantity: item.quantity });
                    order.totalAmount += total;
                }
            }
        });

        this.orders.push(order);
        return order;
    }

    cancelOrder(orderId: number): void {
        const index = this.orders.findIndex(order => order.orderId === orderId);
        if (index === -1) {
            console.log('Không tìm thấy đơn hàng để hủy.');
            return;
        }
        const order = this.orders[index];
        if (!order) {
            console.log('Không tìm thấy đơn hàng để hủy.');
            return;
        }
        order.products.forEach(item => {
            item.product.restock(item.quantity);
        });
        this.orders.splice(index, 1);
        console.log(`Đã hủy đơn hàng ${orderId} và hoàn trả sản phẩm về kho.`);
    }

    listAvailableProducts(): void {
        const available = this.products.filter(p => p.stock > 0);
        if (available.length === 0) {
            console.log('Không có sản phẩm nào còn hàng.');
            return;
        }
        console.log('Danh sách sản phẩm còn hàng:');
        available.forEach(p => console.log(p.getProductInfo()));
    }

    listCustomerOrders(customerId: number): void {
        const orders = this.orders.filter(o => {
            const customer = this.customers.find(c => c.name === o.customer);
            return customer?.id === customerId;
        });
        if (orders.length === 0) {
            console.log('Khách hàng chưa có đơn hàng nào.');
            return;
        }
        console.log(`Đơn hàng của khách hàng id=${customerId}:`);
        orders.forEach(o => console.log(o.getDetails()));
    }

    calculateTotalRevenue(): number {
        return this.orders.reduce((sum, order) => sum + order.totalAmount, 0);
    }

    countProductsByCategory(): void {
        const counts = this.products.reduce((acc, p) => {
            const cat = p.getCategory();
            acc[cat] = (acc[cat] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);
        console.log('Số lượng sản phẩm theo danh mục:');
        Object.entries(counts).forEach(([cat, count]) => {
            console.log(`${cat}: ${count}`);
        });
    }

    updateProductStock(productId: number, newStock: number): void {
        const idx = this.products.findIndex(p => p.id === productId);
        if (idx === -1) {
            console.log('Không tìm thấy sản phẩm để cập nhật.');
            return;
        }
        if (this.products[idx]) {
            this.products[idx].stock = newStock;
        }
        console.log(`Đã cập nhật tồn kho sản phẩm id=${productId} thành ${newStock}`);
    }

    findEntityById<T extends { id: number }>(collection: T[], id: number): T | undefined {
        return collection.find(e => e.id === id);
    }
}

function mainMenu(store: Store3) {
    let choice: number;
    do {
        console.log(`\n===== MENU CHỨC NĂNG =====`);
        console.log(`1. Thêm khách hàng mới.`);
        console.log(`2. Thêm sản phẩm mới.`);
        console.log(`3. Tạo đơn hàng mới.`);
        console.log(`4. Hủy đơn hàng.`);
        console.log(`5. Hiển thị sản phẩm còn hàng.`);
        console.log(`6. Hiển thị đơn hàng của khách hàng.`);
        console.log(`7. Tính tổng doanh thu.`);
        console.log(`8. Thống kê sản phẩm theo danh mục.`);
        console.log(`9. Cập nhật tồn kho sản phẩm.`);
        console.log(`10. Tìm kiếm thông tin theo ID.`);
        console.log(`11. Xem thông tin chi tiết sản phẩm.`);
        console.log(`12. Thoát chương trình.`);
        choice = Number(prompt('Chọn chức năng: '));
        switch (choice) {
            case 1:
                const name = prompt('Tên khách hàng: ') || '';
                const email = prompt('Email: ') || '';
                const address = prompt('Địa chỉ: ') || '';
                store.addCustomer(name, email, address);
                break;
            case 2:
                const type = prompt('Loại sản phẩm (1: Đồ điện tử, 2: Quần áo): ') || '';
                const pname = prompt('Tên sản phẩm: ') || '';
                const price = Number(prompt('Giá: ')) || 0;
                const stock = Number(prompt('Tồn kho: ')) || 0;
                if (type === '1') {
                    const warranty = Number(prompt('Thời gian bảo hành (tháng): '));
                    store.addProduct(new ElectronicsProduct3(store.products.length + 1, pname, price, stock, warranty));
                } else {
                    const size = prompt('Size: ') || '';
                    const color = prompt('Màu sắc: ') || '';
                    store.addProduct(new ClothingProduct3(store.products.length + 1, pname, price, stock, size, color));
                }
                break;
            case 3:
                const customerId = Number(prompt('ID khách hàng: '));
                let productQuantities: { productId: number, quantity: number }[] = [];
                while (true) {
                    const pid = Number(prompt('ID sản phẩm (0 để kết thúc): '));
                    if (pid === 0) break;
                    const qty = Number(prompt('Số lượng: ')) || 0;
                    productQuantities.push({ productId: pid, quantity: qty });
                }
                const order = store.createOrder(customerId, productQuantities);
                if (order) console.log(order.getDetails());
                else console.log('Tạo đơn hàng thất bại.');
                break;
            case 4:
                const oid = Number(prompt('ID đơn hàng cần hủy: '));
                store.cancelOrder(oid);
                break;
            case 5:
                store.listAvailableProducts();
                break;
            case 6:
                const cid = Number(prompt('ID khách hàng: '));
                store.listCustomerOrders(cid);
                break;
            case 7:
                console.log('Tổng doanh thu:', store.calculateTotalRevenue());
                break;
            case 8:
                store.countProductsByCategory();
                break;
            case 9:
                const upid = Number(prompt('ID sản phẩm: '));
                const newStock = Number(prompt('Tồn kho mới: '));
                store.updateProductStock(upid, newStock);
                break;
            case 10:
                const entityType = prompt('Tìm (1: Customer, 2: Product): ');
                const eid = Number(prompt('ID cần tìm: '));
                if (entityType === '1') {
                    const customer = store.findEntityById(store.customers, eid);
                    if (customer) console.log(customer.getDetails());
                    else console.log('Không tìm thấy khách hàng.');
                } else {
                    const product = store.findEntityById(store.products, eid);
                    if (product) console.log(product.getProductInfo());
                    else console.log('Không tìm thấy sản phẩm.');
                }
                break;
            case 11:
                const pidInfo = Number(prompt('ID sản phẩm: '));
                const prod = store.products.find(p => p.id === pidInfo);
                if (prod) console.log(prod.getProductInfo());
                else console.log('Không tìm thấy sản phẩm.');
                break;
            case 12:
                console.log('Đã thoát chương trình.');
                break;
            default:
                console.log('Chức năng không hợp lệ.');
        }
    } while (choice !== 12);
}

// Để chạy menu:
const store = new Store3([], [], []);
mainMenu(store);
