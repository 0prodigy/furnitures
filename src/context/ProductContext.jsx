import React from "react";
import { createContext } from "react";
import { Component } from "react";
import Airtable from "airtable";
import APIKEY from "../APIKEY";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: APIKEY,
});

const base = Airtable.base("appQ41deBPSu2yoU3");
let data = [];

export const ProductContext = createContext();

export default class ProductContextProvider extends Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.state = {
      products: data,
    };
  }
  getData = () => {
    let page;
    base("Furniture")
      .select({
        view: "All furniture",
      })
      .eachPage(
        (page = (records, fetchNextPage) => {
          data = records;
          this.setState({ products: records });
          fetchNextPage();
        }),
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  };
  componentDidMount() {
    // async () => {
    this.getData();
    // };
  }
  render() {
    const { products } = this.state;
    return (
      <ProductContext.Provider value={{ products }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
