
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto mt-12">
      <h1 className="text-3xl font-bold mb-4">Trang chủ</h1>
      <p className="mb-4">
        Đây là trang chủ. Thử gõ một đường dẫn không tồn tại (ví dụ /abcxyz) vào thanh địa chỉ để xem trang 404.
      </p>
      <Link
        to="/about"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        About
      </Link>
    </div>
  );
}