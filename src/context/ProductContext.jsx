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
let page;
export const ProductContext = createContext();

export default class ProductContextProvider extends Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.state = {
      products: [],
      designers: [],
    };
  }
  getData = () => {
    base("Furniture")
      .select({
        view: "All furniture",
      })
      .eachPage(
        (page = (records, fetchNextPage) => {
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

  getDesigners = () => {
    base("Designers")
      .select({
        view: "All designers",
      })
      .eachPage(
        (page = (records, fetchNextPage) => {
          this.setState({ designers: records });
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
    this.getData();
    this.getDesigners();
  }
  render() {
    const { products, designers } = this.state;
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
    return (
      <ProductContext.Provider
        value={{ products, grossSale, productSale, stock, designers }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
