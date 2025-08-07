interface Product {
    readonly id : string;
    name : string;
    price : number;
}

interface OrderItem {
    product: Product;
    quantity: number;
    node?: string; // Ghi chú cho từng sản phẩm
}

interface Order {
    orderId: string;
    customerName: string;
    items: OrderItem[];
    deliveryAddress?: string;
    isPaid?: boolean; // Trạng thái thanh toán
}


interface Invoice {
    invoiceId: string;
    orders: Order[];
    createdAt: Date;
}

function calculateOrderTotal(order: Order): number {
    return order.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}

function calculateInvoiceTotal(invoice: Invoice): number {
    return invoice.orders.reduce((total, order) => total + calculateOrderTotal(order), 0);
}

function getUnpaidOrders(invoice: Invoice): Order[] {
    return invoice.orders.filter(order => !order.isPaid);
}

function printInvoice(invoice: Invoice): void {
    console.log(`HÓA ĐƠN: #${invoice.invoiceId} - Ngày tạo: ${invoice.createdAt.toISOString().slice(0,10)}`);
    console.log('------------------------------');
    invoice.orders.forEach(order => {
        console.log(`\nĐƠN HÀNG: #${order.orderId} - ${order.customerName}`);
        order.items.forEach(item => {
            let line = `- ${item.product.name} × ${item.quantity} → ${(item.product.price * item.quantity).toLocaleString()} VND`;
            if (item.node) line += ` (note: ${item.node})`;
            console.log(line);
        });
        console.log(`\nTổng đơn: ${calculateOrderTotal(order).toLocaleString()} VND`);
        console.log(`\nTrạng thái: ${order.isPaid ? 'ĐÃ THANH TOÁN' : 'CHƯA THANH TOÁN'}`);
    });
    console.log(`\n>> Tổng cộng hóa đơn: ${calculateInvoiceTotal(invoice).toLocaleString()} VND`);
}

const invoice: Invoice = {
    invoiceId: "INV001",
    createdAt: new Date(),
    orders: [
        {
            orderId: "ORD001",
            customerName: "Nguyễn Văn A",
            items: [
                { product: { id: "P001", name: "Áo sơ mi", price: 100000 }, quantity: 2 },
                { product: { id: "P002", name: "Quần jean", price: 200000 }, quantity: 1 }
            ],
            deliveryAddress: "123 Đường ABC, Quận 1, TP.HCM",
            isPaid: true
        },
        {
            orderId: "ORD002",
            customerName: "Trần Thị B",
            items: [
                { product: { id: "P003", name: "Váy hoa", price: 150000 }, quantity: 1 , node: "Size M"}
            ],
            
            deliveryAddress: "456 Đường DEF, Quận 2, TP.HCM",
            isPaid: false
        }
    ]
};
printInvoice(invoice);