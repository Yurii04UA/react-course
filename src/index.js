import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { AuthProvider } from "./pages/Login/context/AuthProvider";
import { ThemeProvider } from "./pages/weatherAPP/provider/ThemeProvider";
import { Store } from "./pages/weatherAPP/store/Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
        
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
