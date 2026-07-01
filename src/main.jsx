import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/layout.css";
import "./styles/typography.css";
import "./styles/buttons.css";
import "./styles/cards.css";
import "./styles/navigation.css";
import "./styles/hero.css";
import "./styles/growthpilot.css";
import "./styles/case-study.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);