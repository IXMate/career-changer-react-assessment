import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import HomeNormal from "./components/HomeNormal";
import HomeUser from "./components/HomeUser";
import HomeAdmin from "./components/HomeAdmin";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeNormal />,
      },
      {
        path: "/homeuser",
        element: <HomeUser />
      },
      {
        path: "/homeadmin",
        element: <HomeAdmin />
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}


