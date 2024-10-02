import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import React from "react";
import * as ReactDOM from "react-dom/client";
import { router } from "./Routes/router";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);