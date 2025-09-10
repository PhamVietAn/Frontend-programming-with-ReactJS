import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Login account</h2>
      <form className="flex flex-col gap-4">
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@company.com"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="pass" className="block mb-1 font-medium">
            Password
          </label>
          <input
            type="password"
            name="pass"
            id="pass"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
          type="submit"
        >
          Login an account
        </button>
        <span className="text-center text-gray-500 text-sm">
          Already have an account?{" "}
          <Link to="/register" className="text-blue-600 font-medium hover:underline">
            Register here
          </Link>
        </span>
      </form>
    </div>
  );
}