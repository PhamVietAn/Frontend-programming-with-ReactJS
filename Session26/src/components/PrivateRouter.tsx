import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";

export default function PrivateRouter() {
  const [isLoggedIn] = useState<boolean>(true);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}