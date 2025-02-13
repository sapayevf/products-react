import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Products from "./components/Products/Products";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <Products />
  // </StrictMode>
);
