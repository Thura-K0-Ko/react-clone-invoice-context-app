import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GeneralContextProvider from "./contexts/GeneralContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GeneralContextProvider>
    <App />
  </GeneralContextProvider>
);
