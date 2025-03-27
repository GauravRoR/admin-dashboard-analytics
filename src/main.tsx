import React from "react";
import { createRoot } from "react-dom/client";
import ThemeProvider from "./utils/ThemeContext";
import App from "./App";
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found!");
} 