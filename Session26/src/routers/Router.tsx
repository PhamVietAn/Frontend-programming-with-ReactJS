import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import Student from "../components/Student";
import StudentSearch from "../components/StudentSearch";
import Login from "../components/Login";
import PrivateRouter from "../components/PrivateRouter";
import Account from "../components/Account";
import Team from "../components/Team";
import TeamsIndex from "../components/TeamsIndex";
import Teams from "../components/Teams";

const router = createBrowserRouter([
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/student/:name",
    element: <Student />,
  },
  {
    path: "/Student/",
    element: <StudentSearch />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/account",
    element: <PrivateRouter />,
    children: [
      {
        path: "",
        element: <Account />,
      },
    ],
  },
  {
    path: "/teams",
    element: <Teams />,
    children: [
      {
        index: true,
        element: <TeamsIndex />,
      },
      {
        path: ":teamId",
        element: <Team />,
      },
    ],
  },
]);

export default router;
