import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NavigationContextProvider from "./context/Navigation";
import ProductContextProvider from "./context/ProductContext";

ReactDOM.render(
  <ProductContextProvider>
    <NavigationContextProvider>
      <App />
    </NavigationContextProvider>
  </ProductContextProvider>,
  document.getElementById("root")
);
