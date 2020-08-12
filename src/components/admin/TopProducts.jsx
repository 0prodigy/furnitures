import React from "react";
import Product from "./Product";
import styled from "styled-components";

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
          Hot Selling Products <a href="./Dashboard.jsx">See All</a>
        </h2>
      </div>
      <div className="products">
        <Product
          img="https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          name="something big to check"
          description="some description make your page or section look good"
          price="$54"
        />
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
