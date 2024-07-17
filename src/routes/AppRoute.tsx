import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";

import PageLoader from "../features/template/components/PageLoader";
import PageRoutes from "./PageRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      {PageRoutes.map((item) => (
        <Route
          key={"route-" + item.path}
          path={item.path}
          element={
            <Suspense fallback={<PageLoader hasTopLoader={true} />}>
              {item.component}
            </Suspense>
          }
        />
      ))}

      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
export default AppRoutes;
