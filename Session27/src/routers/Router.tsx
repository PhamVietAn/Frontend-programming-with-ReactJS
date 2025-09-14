import { createBrowserRouter } from "react-router-dom";
// import Home from "../components/ex01/Home";
// import About from "../components/ex01/About";
// import Contact from "../components/ex01/Contact";
// import ProductList from "../components/ex02/ProductList";
// import ProductDetail from "../components/ex02/ProductDetail";
// import TaskList from "../components/ex03/TaskList";
// import TaskDetail from "../components/ex03/TaskDetail";
// import ProductList from "../components/ex04/ProductList";
// import BlogLayout from "../components/ex05/BlogLayout";
// import PostDetail from "../components/ex05/PostDetail";
// import Post from "../components/ex05/Post";
import NotFound from "../components/ex07/NotFound";
import Home from "../components/ex07/Home";
import About from "../components/ex07/About";


const router = createBrowserRouter([
  // { path: "/", element: <Home /> },
  // { path: "/about", element: <About /> },
  // { path: "/contact", element: <Contact /> },
  // { path: "/products", element: <ProductList /> },
//   { path: "/products/:id", element: <ProductDetail /> },
//   { path: "/", element: <TaskList /> },
//   { path: "/task/:id", element: <TaskDetail /> },
//   { path: "/products", element: <ProductList /> },
// {
//     path: "/blog",
//     element: <BlogLayout />,
//     children: [
//       {
//         path: "posts", // path con, không có dấu /
//         element: <Post />
//       },
//       {
//         path: "posts/:id", // path con, không có dấu /
//         element: <PostDetail />
//       }
//     ]
//   },
{ path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <NotFound /> },
]);

export default router;