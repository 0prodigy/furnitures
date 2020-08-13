import React, { createContext } from "react";
import { Component } from "react";

export const NavigationContext = createContext();

export default class NavigationContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: "Dashboard",
      admin: true,
    };
  }

  toggleAdmin = () => {
    this.setState({ admin: !this.state.admin });
  };

  updatePreview = (value) => {
    this.setState({ preview: value });
  };
  render() {
    const { preview, admin } = this.state;
    const { updatePreview: update, toggleAdmin } = this;
    return (
      <NavigationContext.Provider
        value={{ preview, update, admin, toggleAdmin }}
      >
        {this.props.children}
      </NavigationContext.Provider>
    );
  }
}
