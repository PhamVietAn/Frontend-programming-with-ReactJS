
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-2xl mx-auto mt-12 text-center">
      <h1 className="text-2xl font-bold mb-4">About</h1>
      <p className="mb-4">Trang giới thiệu mẫu.</p>
      <Link
        to="/"
        className="text-blue-600 hover:underline"
      >
        Quay về trang chủ
      </Link>
    </div>
  );
}