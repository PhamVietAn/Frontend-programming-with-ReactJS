import { Outlet, Link } from "react-router-dom";

export default function Teams() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Teams</h2>
      <nav className="mb-4 flex gap-4">
        <Link to="">Danh sách Teams</Link>
        <Link to="team-a">Team A</Link>
        <Link to="team-b">Team B</Link>
      </nav>
      <Outlet />
    </div>
  );
}