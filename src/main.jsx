/* eslint-disable no-undef */
import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/Store/store";
import { Provider } from "react-redux";

import { createRoot } from "react-dom/client";
import axios from "axios";
const { VITE_URLDEPLOY, VITE_APIURLOCAL } = import.meta.env;
axios.defaults.baseURL = VITE_URLDEPLOY || VITE_APIURLOCAL;

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
