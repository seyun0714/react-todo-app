import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import MainPage from "./pages/MainPage.jsx";
import TodoAddPage from "./pages/TodoAddPage.jsx";
import TodoDetailPage from "./pages/TodoDetailPage.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/add",
        element: <TodoAddPage />,
      },
      {
        path: "/detail/:id",
        element: <TodoDetailPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
