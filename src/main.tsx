import React from "react";
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

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={Path.Home} element={<HomePage />} />
          <Route path={Path.Counters} element={<CountersPage />} />
          <Route path={Path.Add} element={<AddPage />} />
          <Route path={Path.Login} element={<LoginPage />} />
          <Route path={Path.Register} element={<RegisterPage />} />
          <Route path={Path.ResetPassword} element={<ResetPasswordPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
