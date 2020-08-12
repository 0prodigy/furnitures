import React, { createContext } from "react";
import { Component } from "react";

export const NavigationContext = createContext();

export default class NavigationContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: "Dashboard",
    };
  }
  updatePreview = (value) => {
    this.setState({ preview: value });
  };
  render() {
    const { preview } = this.state;
    const { updatePreview: update } = this;
    return (
      <NavigationContext.Provider value={{ preview, update }}>
        {this.props.children}
      </NavigationContext.Provider>
    );
  }
}
