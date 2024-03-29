import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "react-notifications/lib/notifications.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import './bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Suspense fallback={<p>Cargando...</p>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </Provider>
);

reportWebVitals();
