import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function BlogLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-white p-8">
        <Outlet />
      </main>
    </div>
  );
}