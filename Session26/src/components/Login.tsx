import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const validUser = {
    email: "admin@gmail.com",
    password: "123456",
    role: "admin",
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      form.email === validUser.email &&
      form.password === validUser.password &&
      form.role === validUser.role
    ) {
      setError("");
      navigate("/account");
    } else {
      setError("Thông tin đăng nhập không đúng!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xs mx-auto mt-8 flex flex-col gap-3"
    >
      <h2 className="text-center text-xl font-semibold mb-2">Đăng nhập</h2>
      <input
        type="email"
        name="email"
        placeholder="Nhập email"
        value={form.email}
        onChange={handleChange}
        className="border px-2 py-2"
      />
      <input
        type="password"
        name="password"
        placeholder="Nhập mật khẩu"
        value={form.password}
        onChange={handleChange}
        className="border px-2 py-2"
      />
      <select
        name="role"
        value={form.role}
        onChange={handleChange}
        className="border px-2 py-2"
      >
        <option value="">-- Chọn quyền --</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <button
        type="submit"
        className="border px-2 py-2 bg-gray-100 hover:bg-gray-200"
      >
        Đăng nhập
      </button>
      {error && <p className="text-red-500 text-center">{error}</p>}
    </form>
  );
}