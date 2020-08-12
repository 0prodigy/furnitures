import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NavigationContextProvider from "./context/Navigation";

ReactDOM.render(
  <NavigationContextProvider>
    <App />
  </NavigationContextProvider>,
  document.getElementById("root")
);
