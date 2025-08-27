import { useState } from 'react'

export default function Ex02() {
    const [product] = useState({
      id: 1,
      name: "Coca cola",
      price: 1000,
      quantity: 10
    });
  return (
    <div>
        <h1>Thông tin sản phẩm</h1>
        <p><strong>Id:</strong> {product.id}</p>
        <p><strong>Tên sản phẩm:</strong> {product.name}</p>
        <p><strong>Giá:</strong> {product.price}</p>
        <p><strong>Số lượng:</strong> {product.quantity}</p>
    </div>
  )
}
