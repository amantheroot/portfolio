import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./assets/fontawesome/css/all.min.css";
import "./assets/fonts/fonts.css";

import { Provider } from "react-redux";
import store from "./store/store";

let loading = document.getElementById("loading");

window.addEventListener("load", () => {
  loading.style.opacity = 0;
  setTimeout(() => {
    loading.style.display = "none";
    document.body.style.overflow = "auto";
  }, 1000);
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
