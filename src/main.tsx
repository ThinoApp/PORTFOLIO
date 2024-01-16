import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Loader from "./components/Loader/Loader.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommingSoon from "./presentationals/ComingSoon/ComingSoon.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/PORTFOLIO"
          element={
            <React.Suspense fallback={<Loader />}>
              <App />
            </React.Suspense>
          }
        />
        <Route path="*" element={<CommingSoon />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
