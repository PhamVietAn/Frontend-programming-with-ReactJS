import App from "../App";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {path: "/", element: "Copy and paste /list-post to url"},
    {path: "/list-post", element: <App />},
]);

