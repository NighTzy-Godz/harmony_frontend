import React from "react";
import ReactDOM from "react-dom/client";
import "./static/css/global.css";

import App from "./components/App";

window.process = {};
console.log(process.env);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
