import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import CountersPage from "./pages/CountersPage";
import Path from "./common/path";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={Path.Home} element={<HomePage />} />
        <Route path={Path.Counters} element={<CountersPage />} />
        <Route path={Path.Add} element={<AddPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
