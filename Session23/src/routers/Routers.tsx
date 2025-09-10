import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";

import Register from "../components/Register";
import Login from "../components/Login";

import NotFound from "../components/NotFound";

import Header from "../components/Header";

import CustomLink from "../components/CustomLink";
import HomePage from "../components/HomePage";
import ListUser from "../components/ListUser";
import UserDetail from "../components/UserDetail";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  {
    path: "/header",
    element: <Header />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
    ],
  },
  {
    path: "/customlink",
    element: <CustomLink />,
    children: [{ path: "home-page", element: <HomePage /> }],
  },
  { path: "/list-user", element: <ListUser /> },
  { path: "/user-detail", element: <UserDetail /> },
  { path: "*", element: <NotFound /> },
]);

export default router;