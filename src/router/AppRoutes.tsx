// src/router/Route.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/PageContainer"; // Import the layout
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      
      <Route path="login" element={<LoginPage />} />
    </Route>
  </Routes>
);

export default AppRoutes;
