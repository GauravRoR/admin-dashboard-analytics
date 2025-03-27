import React, { Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import "./charts/ChartjsConfig";
import Loader from "./components/Loader";
const Layout: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.style.scrollBehavior = "auto";
      window.scrollTo({ top: 0 });
      htmlElement.style.scrollBehavior = "";
    }
  }, [location.pathname]);
  return <Outlet />;
};
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Dashboard />
          </Suspense>
        ),
      },
    ],
  },
]);
const App: React.FC = () => {
  return <RouterProvider router={router} fallbackElement={<Loader />} />;
};
export default App;
