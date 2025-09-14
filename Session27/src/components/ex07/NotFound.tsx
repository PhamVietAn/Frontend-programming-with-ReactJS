import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-xl shadow p-10 w-fit text-center">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-bold mb-2">Trang bạn tìm không tồn tại.</h2>
        <p className="text-gray-500 mb-6">
          Có thể đường dẫn bạn nhập sai hoặc trang đã được di chuyển.
        </p>
        <div className="flex justify-center gap-4 mb-2">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => navigate("/")}
          >
            Quay về trang chủ
          </button>
          <button
            className="border px-6 py-2 rounded hover:bg-gray-100 transition"
            onClick={() => navigate(-1)}
          >
            Quay lại
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-4">
          Nếu vẫn để tiếp tục, kiểm tra URL hoặc liên hệ quản trị viên.
        </p>
      </div>
    </div>
  );
}