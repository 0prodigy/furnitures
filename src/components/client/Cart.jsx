import React from "react";
import styled from "styled-components";
import Product from "../admin/Product";

const CartWrap = styled.div`
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

  .btn-dark {
    padding: 20px 30px;
    width: 100%;
    background: #19301c;
    color: #fdfcfb;
    border: 2px solid #19301c;
    cursor: pointer;
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: 400;
    cursor: pointer;
  }
`;

export default function Cart(props) {
  const { data } = props;
  return (
    <CartWrap>
      <div className="heading">
        <h2>
          Your Cart <a href="/#">See All</a>
        </h2>
      </div>
      <div className="products">
        {data.map((product) => (
          <Product
            img={product.fields.Images[0].url}
            key={product.id}
            id={product.id}
            name={product.fields["Name"]}
            description={product.fields["Description"]}
            price={"$ " + product.fields["Unit cost"]}
          />
        ))}
      </div>
      <button className="btn-dark">Checkout</button>
    </CartWrap>
  );
}
