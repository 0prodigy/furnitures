import React from "react";
import styled from "styled-components";

const ProductWrap = styled.div`
  padding: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  margin: 6px 0;
  .img-container {
    img {
      width: 75px;
      height: 70px;
      border-radius: 12px;
      backgroud: #eee;
    }
  }
  .product-description {
    flex: 1;
    padding: 0 22px;
    h2 {
      font-size: 1.2rem;
      font-weight: 700;
    }
    p {
      font-size: 0.8rem;
      font-weight: 500;
      color: #716d84;
    }
  }
  .price {
    font-size: 1.2rem;
    font-weight: 700;
  }

  &:hover {
    background: #fff;
  }
`;

function Product(props) {
  const { img, name, description, price } = props;
  return (
    <ProductWrap>
      <div className="img-container">
        <img src={img} alt={props.name} />
      </div>
      <div className="product-description">
        <h2>{name}</h2>
        <p>{description.slice(0, 50)}</p>
      </div>
      <h2 className="price">{price}</h2>
    </ProductWrap>
  );
}

export default Product;
