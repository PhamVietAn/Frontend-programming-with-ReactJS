import { useParams, Link } from "react-router-dom";
import { getProductById } from "../../data/products";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const productId = id ? parseInt(id) : 0;
  const product = getProductById(productId);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  if (!product) {
    return (
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        margin: '2rem 0',
        textAlign: 'center'
      }}>
        <h1 style={{
          color: '#dc3545',
          fontSize: '1.5rem',
          marginBottom: '1rem'
        }}>
          Sản phẩm không tồn tại
        </h1>
        <p style={{
          color: '#666',
          fontSize: '1rem',
          marginBottom: '2rem'
        }}>
          Không tìm thấy sản phẩm với ID: {id}
        </p>
        <Link 
          to="/products"
          style={{
            color: '#007bff',
            textDecoration: 'underline',
            fontSize: '1rem'
          }}
        >
          Quay lại danh sách sản phẩm
        </Link>
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: 'white',
      padding: '2rem',
      margin: '2rem 0'
    }}>
      <h1 style={{
        color: '#333',
        fontSize: '2rem',
        marginBottom: '2rem',
        fontWeight: 'bold'
      }}>
        Chi tiết sản phẩm
      </h1>
      
      <div>
        <h2 style={{
          color: '#333',
          fontSize: '1.5rem',
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
          {product.name}
        </h2>
        
        <p style={{
          color: '#333',
          fontSize: '1.2rem',
          marginBottom: '1rem'
        }}>
          Giá: {formatPrice(product.price)}
        </p>
        
        <p style={{
          color: '#333',
          fontSize: '1rem',
          marginBottom: '2rem'
        }}>
          Mô tả: {product.description}
        </p>
        
        <Link 
          to="/products"
          style={{
            color: '#007bff',
            textDecoration: 'underline',
            fontSize: '1rem'
          }}
        >
          Quay lại danh sách sản phẩm
        </Link>
      </div>
    </div>
  );
}