import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-[250px] bg-[#6f42c1] flex flex-col justify-between py-8 px-4">
        <div>
          <h1 className="text-white text-2xl font-bold mb-8 flex items-center gap-2">
            📝 My Blog
          </h1>
          <div>
            <Link
              to="/blog/posts"
              className={`block p-[12px_16px] rounded-lg font-bold text-white transition 
                ${location.pathname === "/blog/posts"
                  ? "bg-white/20"
                  : "hover:bg-white/10"}`}
            >
              Posts
            </Link>
          </div>
        </div>
        <div className="text-white mt-8 border-t pt-4">
          © 2025 My Blog
        </div>
      </div>
    </div>
  );
}