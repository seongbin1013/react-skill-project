import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./reset.css";
import QueryClientSetup from "./components/QueryClientSetup.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientSetup>
      <App />
    </QueryClientSetup>
  </React.StrictMode>
);
