import React, { JSX } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import CountersPage from "./pages/CountersPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Path from "./common/path";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AccountPage from "./pages/AccountPage";
import { ProtectedRoute } from "./app/ProtectedRoute";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{routes()}</BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

function route(
  path: string,
  element: JSX.Element,
  protection: "protected" | "unprotected" = "protected"
) {
  return (
    <Route
      path={path}
      element={
        protection === "protected" ? (
          <ProtectedRoute>{element}</ProtectedRoute>
        ) : (
          element
        )
      }
    />
  );
}

function routes() {
  const list = [
    route(Path.Home, <HomePage />, "unprotected"),
    route(Path.Register, <RegisterPage />, "unprotected"),
    route(Path.ResetPassword, <ResetPasswordPage />, "unprotected"),
    route(Path.Login, <LoginPage />, "unprotected"),
    route(Path.Counters, <CountersPage />),
    route(Path.Add, <AddPage />),
    route(Path.Account, <AccountPage />),
  ];

  return <Routes>{list}</Routes>;
}
