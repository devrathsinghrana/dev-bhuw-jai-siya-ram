// src/router/Route.tsx
import React from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import MainLayout from "../layouts/PageContainer";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";

const NotFound: React.FC = () => <h1>404 - Page Not Found</h1>;

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

// Create a router instance
export const router = createBrowserRouter(routes);
