import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/routes";
import { AuthContext } from "../context/index";

const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to="/posts" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
