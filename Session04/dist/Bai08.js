"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function caculateOderTotal(order) {
    return order.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
    }, 0);
}
function printOrder(order) {
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(`Sản phẩm:\n - ${order.items.map(item => `${item.product.name} x ${item.quantity}`).join('\n - ')}`);
    console.log(`Tổng tiền: ${caculateOderTotal(order).toLocaleString()} VNĐ`);
    console.log(`Ghi chú: ${order.note ? order.note : 'Không có'}`);
}
const order = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        {
            product: {
                id: "P001",
                name: "áo sơ mi",
                price: 100000
            },
            quantity: 2
        },
        {
            product: {
                id: "P002",
                name: "quần tây",
                price: 200000
            },
            quantity: 1
        }
    ],
    note: "Ghi chú đơn hàng"
};
printOrder(order);
//# sourceMappingURL=Bai08.js.map