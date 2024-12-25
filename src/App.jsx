import Doctor from "./components/Docter/Doctor";
import FindDoctor from "./components/FindDocter/FindDoctor";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <FindDoctor />,
        },
        {
          path: "/about",
          element: <Doctor />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
