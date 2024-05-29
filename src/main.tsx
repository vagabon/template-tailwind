import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { RouterProvider } from "./router/provider/RouterProvider.tsx";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterProvider>
        <App />
      </RouterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
