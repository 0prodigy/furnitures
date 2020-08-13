import React from "react";
import styled from "styled-components";
import { ProductContext } from "../../context/ProductContext";
import Product from "./Product";
import Nav from "./Nav";

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px;
  max-width: 1100px;
  margin: auto;
  > div {
    flex: 33.33%;
    max-width: 33.33%;
  }
`;

const Title = styled.div`
  padding: 20px 35px 5px;
  max-width: 1100px;
  margin: auto;
  text-align: center;
  h1 {
    font-size: 2.4rem;
    font-weight: 400;
    color: #333;
  }
`;

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

const NavWrap = styled.div`
  background: #f2f1ef;
`;

export default function SingleProduct(props) {
  let { data, updateProduct } = props;
  data = data.fields;
  return (
    <div>
      <NavWrap>
        <Nav count={props.count} />
      </NavWrap>
      <Wrapper>
        <div
          className="img-container"
          style={{
            background: `url( ${data.Images[0].url || "img/greenchair.PNG"})`,
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
            <button className="btn-dark" onClick={props.updateCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </Wrapper>
      <ProductContext.Consumer>
        {(value) => (
          <div>
            <Title>
              <h1>Similar Product Specially Customize for</h1>
              <p>We provide world best {data["Type"]} all over the world</p>
            </Title>
            <Products>
              {value.products.map(
                (product) =>
                  product.fields["Type"] === data["Type"] && (
                    <Product
                      key={product.id}
                      id={product.id}
                      name={product.fields["Name"]}
                      type={product.fields["Type"]}
                      img={product.fields.Images[0].url}
                      price={"$ " + product.fields["Unit cost"]}
                      handleClick={updateProduct}
                      data={product}
                    />
                  )
              )}
            </Products>
          </div>
        )}
      </ProductContext.Consumer>
    </div>
  );
}
