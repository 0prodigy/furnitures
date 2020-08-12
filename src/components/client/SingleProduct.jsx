import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;

  .img-container {
    background: url("img/greenchair.PNG");
    flex: 50%;
  }

  .product-description {
    padding: 40px;
    flex: 50%;

    button {
      padding: 25px 40px;
      font-size: 1.2rem;
      font-weight: 500;
    }
    .btn-light {
      background: transparent;
      border: 2px solid #19301c;
      color: #19301c;
    }
    .btn-dark {
      background: #19301c;
      color: #f2f1ef;
      border: 2px solid #19301c;
      cursor: pointer;
    }
    .breadcrumb {
      a {
        color: #737373;
        text-decoration: none;
        display: inline-block;
        padding-right: 10px;
        font-weight: 500;
      }
      .active {
        color: #333;
      }
    }

    h3 {
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 3;
    }

    p {
      color: #737373;
    }
    .checkout {
      margin-top: 40px;
      text-align: center;
    }
  }
  .flex {
    display: flex;
  }
  .meta-container {
    display: flex;
    padding-top: 50px;
    flex-wrap: wrap;
    .meta {
      flex: 50%;
      max-width: 50%;

      h4 {
        font-size: 1.1rem;
        line-height: 3;
        color: #737373;
        font-weight: 300;
      }
      p {
        color: #000;
        font-weight: 500;
      }
    }
  }
`;

export default function SingleProduct(props) {
  const { data } = props;

  return (
    <>
      <Wrapper>
        <div className="img-container"></div>
        <div className="product-description">
          <div className="felx">
            <div className="breadcrumb">
              <a href="/#" className="active">
                Product Details
              </a>
              <a href="/#">Shipping Information</a>
              <a href="/#">Payment</a>
            </div>
          </div>
          <h3>{"Wooden Chair"}</h3>
          <p>
            {
              "This is some long description if something goes wrong this description distract reader because people tend to read less and see more!! And i feel smart doing this"
            }
          </p>
          <div className="meta-container">
            <div className="meta">
              <h4>Size</h4>
              <p>85 x 70 x 75</p>
            </div>
            <div className="meta">
              <h4>Material</h4>
              <p>Fabric Form, wood</p>
            </div>
            <div className="meta">
              <h4>Shipping</h4>
              <p>Europe, Asia</p>
            </div>
            <div className="meta">
              <h4>Size</h4>
              <p>85 x 70 x 75</p>
            </div>
            <div className="meta">
              <h4>Material</h4>
              <p>Fabric Form, wood</p>
            </div>
            <div className="meta">
              <h4>Shipping</h4>
              <p>Europe, Asia</p>
            </div>
          </div>
          <div className="checkout">
            <button className="btn-light">$222.99</button>
            <button className="btn-dark">Add To Cart</button>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
