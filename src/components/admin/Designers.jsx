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

export default function Designers(props) {
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
            value.designers.map((designer) => (
              <Product
                img={designer.fields.Photo[0].url}
                key={designer.id}
                id={designer.id}
                name={designer.fields["Name"]}
                description={designer.fields["Bio"]}
              />
            ))
          }
        </ProductContext.Consumer>
      </div>
    </Wrapper>
  );
}
