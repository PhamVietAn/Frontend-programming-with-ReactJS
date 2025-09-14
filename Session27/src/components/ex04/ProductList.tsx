import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { products } from "../../data/products";

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [input, setInput] = useState(searchQuery);

  // Đồng bộ input với query string khi tải lại trang hoặc thay đổi url
  useEffect(() => {
    setInput(searchQuery);
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setSearchParams({ search: input.trim() });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="bg-white p-8 my-8 rounded-lg shadow w-fit mx-auto">
      <h1 className="text-3xl text-center font-bold mb-8 text-gray-800">
        Danh sách sản phẩm
      </h1>
      <form onSubmit={handleSearch} className="flex gap-2 mb-6 justify-center">
        <input
          type="text"
          placeholder="Nhập từ khóa tìm kiếm"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 border rounded px-3 py-2 max-w-2xl"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>
      <div className="flex gap-4 flex-wrap">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col shadow hover:shadow-lg transition w-full sm:w-[300px] md:w-[250px]"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {product.name}
            </h3>
            <p className="text-blue-600 mb-1">
              Giá: {product.price.toLocaleString()} VND
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