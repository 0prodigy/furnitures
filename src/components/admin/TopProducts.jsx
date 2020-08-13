import React from "react";
import Product from "./Product";
import styled from "styled-components";
import { ProductContext } from "../../context/ProductContext";

const Wrapper = styled.div`
  padding: 20px;
  .heading {
    padding: 20px;
    h2 {
      font-size: 1.4rem;
    }
    a {
      font-weight: 500;
      float: right;
      font-size: 1rem;
      text-decoration: none;
    }
  }
  .products {
    clear: right;
  }
`;

export default function TopProducts(props) {
  return (
    <Wrapper>
      <div className="heading">
        <h2>
          {props.label} <a href="/#">See All</a>
        </h2>
      </div>
      <div className="products">
        <ProductContext.Consumer>
          {(value) =>
            value.products.map(
              (product) =>
                product.fields["Total units sold"] >= 5 && (
                  <Product
                    img={product.fields.Images[0].url}
                    key={product.id}
                    id={product.id}
                    name={product.fields["Name"]}
                    description={product.fields["Description"]}
                    price={"$ " + product.fields["Unit cost"]}
                  />
                )
            )
          }
        </ProductContext.Consumer>

        <Product
          img="https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          name="something "
          description="some "
          price="$54"
        />
      </div>
    </Wrapper>
  );
}
