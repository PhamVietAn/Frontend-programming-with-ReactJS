interface Product {
    id : string;
    name : string;
    price : number;
    category : {
        id : string;
        name : string;
    };
    discount? : number;
}


const listProduct: Product[] = [
    {
        id: "P001",
        name: "Áo sơ mi",
        price: 300000,
        category: { id: "C001", name: "Thời trang nam" },
        discount: 10
    },
    {
        id: "P002",
        name: "Quần jeans",
        price: 500000,
        category: { id: "C001", name: "Thời trang nam" }
    },
    {
        id: "P003",
        name: "Váy hoa",
        price: 400000,
        category: { id: "C002", name: "Thời trang nữ" },
        discount: 20
    }
];

function getFinalPrice(product: Product): number {
    if (product.discount) {
        return product.price * (1 - product.discount / 100);
    }
    return product.price;
}

function printProductInfo(product: Product): void {
    const finalPrice = getFinalPrice(product);
    console.log(" ");
    console.log(`Tên: ${product.name}`);
    console.log(`Giá gốc: ${product.price.toLocaleString()} VNĐ`);
    if (product.discount) {
        console.log(`Giá sau giảm: ${finalPrice.toLocaleString()} VNĐ`);
    } else {
        console.log(`Không có giảm giá`);
    }
    console.log(`Danh mục: ${product.category.name}`);
    console.log("-----------------------------");
}

listProduct.forEach(printProductInfo);