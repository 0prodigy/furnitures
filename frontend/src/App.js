import React from "react";
import "./App.css";
import Home from "./components/client/Home";
import Dashboard from "./components/admin/Dashboard";
import { NavigationContext } from "./context/Navigation";

function App() {
  return (
    <div className="App">
      <NavigationContext.Consumer>
        {(value) => (value.admin ? <Dashboard /> : <Home />)}
      </NavigationContext.Consumer>
    </div>
  );
}

export default App;
