import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px 20px;
  .img-container {
    overflow: hidden;
    img {
      width: 100%;
    }
    &:hover img {
      transition: all 1s ease;
      transform: scale(1.2);
    }
  }
  .details {
    padding: 20px 5px;
    .left {
      float: left;
    }
    h5 {
      font-size: 1.2rem;
      color: #333;
    }
    p {
      color: #3e3e3e;
    }
    .right {
      float: right;
    }
  }
  .clear {
    clear: both;
  }
`;

function Product(props) {
  const { name, img, type, price, data, handleClick } = props;
  return (
    <Wrapper>
      <div>
        <a href="/#" onClick={() => handleClick(data)}>
          <div className="img-container">
            <img src={img} alt={name} />
          </div>
          <div className="details">
            <div className="left">
              <h5>{name}</h5>
              <p>{type}</p>
            </div>
            <div className="right">
              <p>{price}</p>
            </div>
            <div className="clear"></div>
          </div>
        </a>
      </div>
    </Wrapper>
  );
}

export default Product;
