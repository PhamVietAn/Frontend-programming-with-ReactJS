import { Component } from 'react'
import '../css/ProductCard.css'

interface Product {
    id: number, name: string, price: number, image: string
}

interface ProductCardProps {
    product: Product, onAddToCart: (product: Product) => void
}

export default class ProductCard extends Component<ProductCardProps> {
    formatPrice = (price: number): string => {
        return price.toLocaleString('vi-VN') + ' ₫';
    }

    render() {
        const { product } = this.props;
        
        return (
            <div className="product-card">
                <div className="product-image">
                    <img 
                        src={product.image}
                        alt={product.name}
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150x200/cccccc/666666?text=No+Image';
                        }}
                    />
                </div>
                <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">{this.formatPrice(product.price)}</p>
                    <button 
                        className="add-to-cart-btn"
                        onClick={() => this.props.onAddToCart(product)}
                    >
                        🛒 Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
        )
    }
}