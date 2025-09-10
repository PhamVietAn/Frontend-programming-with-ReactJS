import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface User {
  email: string;
  password: string;
}

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !confirm) {
      setError("Không được để trống dữ liệu");
      return;
    }
    if (confirm !== password) {
      setError("Mật khẩu không khớp");
      return;
    }

    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    const check = users.find((val) => val.email === email);
    if (check) {
      setError("Email đã tồn tại");
      return;
    }

    const newUser = { email: email, password: password };

    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Create account</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block mb-1 font-medium">Your email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="name@company.com"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="pass"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Confirm password</label>
          <input
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            type="password"
            name="confirm"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
          type="submit"
        >
          Create an account
        </button>
        <span className="text-center text-gray-500 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Login here
          </Link>
        </span>
      </form>
    </div>
  );
}