import { Link } from "react-router-dom";
import { products } from "../../data/products";

export default function ProductList() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <div className="bg-white p-8 my-8 rounded-lg shadow w-fit mx-auto">
      <h1 className="text-3xl text-center font-bold mb-8 text-gray-800">
        Danh sách sản phẩm
      </h1>
      <div className="flex gap-4 flex-wrap">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col shadow hover:shadow-lg transition w-full sm:w-[300px] md:w-[250px]"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {product.name}
            </h3>
            <p className="text-blue-600 font-semibold mb-2">
              Giá: {formatPrice(product.price)}
            </p>
            <p className="text-gray-600 text-sm mb-3">
              {product.description}
            </p>
            <Link
              to={`/products/${product.id}`}
              className="text-blue-600 underline text-sm mt-auto hover:text-blue-800"
            >
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}