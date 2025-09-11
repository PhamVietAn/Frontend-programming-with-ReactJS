import { RouterProvider } from "react-router-dom";
import router from "./routers/Router";
import './index.css';
function App() {
  return <RouterProvider router={router} />;
}

export default App;