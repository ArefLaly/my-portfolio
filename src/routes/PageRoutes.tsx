import { lazy } from "react";

const HomePage = lazy(() => import("../pages/Home"));

const PageRoutes = [
  {
    path: "/",
    component: <HomePage />,
  },
];

export default PageRoutes;
