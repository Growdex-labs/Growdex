import "./App.css";
import { createRoot } from "react-dom/client";
import { StrictMode, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Wrapper component to remove preloader after mount
function AppWrapper() {
  useEffect(() => {
    // Remove preloader once React app is mounted
    if (window.removePreloader) {
      window.removePreloader();
    }
  }, []);

  return <App />;
}

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </StrictMode>
);
