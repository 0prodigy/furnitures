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
      grossSale: "18K",
      productSale: "34k",
      stock: "34",
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
    return this.state.products;
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    const { products } = this.state;
    let grossSale = 0;
    let productSale = 0;
    let stock = 0;
    if (this.state.products.length > 0) {
      this.state.products.forEach((product) => {
        if (product.fields["In stock"]) {
          stock += 1;
        }
        grossSale += product.fields["Gross sales"];
        productSale += product.fields["Total units sold"];
      });
    }
    console.log(this.state);
    return (
      <ProductContext.Provider
        value={{ products, grossSale, productSale, stock }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
