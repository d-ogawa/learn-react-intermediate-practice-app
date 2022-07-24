import { memo, VFC } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { HomeRoutes } from "./HomeRoutes";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Outlet />}>
        {HomeRoutes.map((route) => {
          if (route.path) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<HeaderLayout>{route.child}</HeaderLayout>}
              />
            );
          } else {
            return (
              <Route
                key={route.path}
                index
                element={<HeaderLayout>{route.child}</HeaderLayout>}
              />
            );
          }
        })}
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
