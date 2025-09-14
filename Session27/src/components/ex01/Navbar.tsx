import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-gray-100 shadow mb-6">
      <Link to="/" className="font-semibold hover:text-blue-600">Home</Link>
      <Link to="/about" className="font-semibold hover:text-blue-600">About</Link>
      <Link to="/contact" className="font-semibold hover:text-blue-600">Contact</Link>
    </nav>
  );
}