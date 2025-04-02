import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomeNormal from "./components/HomeNormal";
import HomeUser from "./components/HomeUser";
import { HomeAdmin, PostUser } from "./components/HomeAdmin";
import Owner from "./components/Owner";



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
        element: (<> <PostUser /><HomeAdmin />  </>)
      },
      {
        path: "/owner",
        element: <Owner />
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}


