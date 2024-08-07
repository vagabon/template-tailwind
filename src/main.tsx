import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RouterProvider } from "./router/provider/RouterProvider";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <RouterProvider>
        <App />
      </RouterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
