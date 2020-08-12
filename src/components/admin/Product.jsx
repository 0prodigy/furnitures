import React from "react";
import styled from "styled-components";

const ProductWrap = styled.div`
  padding: 20px;
  border-radius: 20px;
  display: flex;
  .img-container {
    img {
      width: 140px;
      height: 140px;
      border-radius: 25px;
      backgroud: #eee;
    }
  }
  .product-description {
    flex: 1;
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
