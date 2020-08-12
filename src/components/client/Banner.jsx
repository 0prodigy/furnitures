import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #f2f1ef;
  color: #19301c;
  padding-bottom: 10px;
  flex: 1;
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
  .slider {
    display: flex;

    .slider-content {
      flex: 1;
      padding: 20px 30px 65px;
      h1 {
        font-weight: 400;
        line-height: 1.4;
        font-size: 5rem;
        font-family: "Abril Fatface", cursive;
      }
      h5 {
        margin-top: 5px;
        line-height: 1.5;
        font-size: 1.2rem;
        font-weight: 400;
        color: #5a695e;
        margin-bottom: 2rem;
      }
      button {
        padding: 16px 20px;
        font-size: 0.9rem;
        font-weight: 700;
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
      }
    }
    .slide-img {
      background: url("img/greenchair.PNG");
      flex: 1;
    }

    .meta-container {
      display: flex;
      padding-top: 100px;
      .meta {
        flex: 1;

        h4 {
          font-size: 1.1rem;
          line-height: 2.5;
        }
        p {
          color: #5a695e;
        }
      }
    }
  }
`;
function Banner() {
  return (
    <Wrapper>
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
      <div className="slider">
        <div className="slider-content">
          <h1>Furniture you will love</h1>
          <h5>
            Our mission is to provide quality home furnishings and accesories
            from trusted name and brand manufactures.
          </h5>
          <button className="btn-light">$330</button>
          <button className="btn-dark">ADD TO CART</button>
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
          </div>
        </div>
        <div className="slide-img"></div>
      </div>
    </Wrapper>
  );
}

export default Banner;
