import React from "react";
import { createContext } from "react";
import { Component } from "react";

export const ProductContext = createContext();

export default class ProductContextProvider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ProductContext.Provider value={}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
