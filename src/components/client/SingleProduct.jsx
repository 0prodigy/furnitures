import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;

  .img-container {
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

const Nav = styled.div`
  background: #f2f1ef;
  .nav {
    padding: 30px;
    display: flex;
    justify-content: space-around;

    ul {
      display: flex;
      list-style: none;

      a {
        text-decoration: none;
        font-weight: 700;
        font-size: 1rem;
        color: #19301c;
        display: inline-block;
        margin-right: 20px;
      }
    }
  }
`;

export default function SingleProduct(props) {
  let { data } = props;
  data = data.fields;
  console.log(data);
  return (
    <div>
      <Nav>
        <div className="nav">
          <div className="left">
            <ul>
              <li>
                <a href="/#">products</a>
              </li>
              <li>
                <a href="/#">about</a>
              </li>
              <li>
                <a href="/#">terms</a>
              </li>
              <li>
                <a href="/#">designers</a>
              </li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>
                <a href="/#">
                  <img src="img/search.PNG" alt="search" />
                </a>
              </li>
              <li>
                <a href="/#">
                  <img src="img/user.PNG" alt="user" />
                </a>
              </li>
              <li>
                <a href="/#">
                  <img src="img/cart.PNG" alt="cart" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Nav>
      <Wrapper>
        <div
          className="img-container"
          style={{
            background:
              "url(" + data.Images[0].url || "img/greenchair.PNG" + ")",
          }}
        ></div>
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
          <h3>{data["Name"]}</h3>
          <p>
            {data["Description"] ||
              "This is some long description if something goes wrong this description distract reader because people tend to read less and see more!! And i feel smart doing this"}
          </p>
          <div className="meta-container">
            <div className="meta">
              <h4>Size</h4>
              <p>{data["Size (WxLxH)"]}</p>
            </div>
            <div className="meta">
              <h4>Materials</h4>
              <p>{data["Materials"]}</p>
            </div>
            <div className="meta">
              <h4>Type</h4>
              <p>{data["Type"]}</p>
            </div>
            <div className="meta">
              <h4>Settings</h4>
              <p>{data["Settings"]}</p>
            </div>
            <div className="meta">
              <h4>Color</h4>
              <p>{data["Color"]}</p>
            </div>
            <div className="meta">
              <h4>Shipping</h4>
              <p>Europe, Asia</p>
            </div>
          </div>
          <div className="checkout">
            <button className="btn-light">$ {data["Unit cost"]}</button>
            <button className="btn-dark">Add To Cart</button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
