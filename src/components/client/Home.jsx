import React from "react";
import Sidebar from "./Sidebar";
import Banner from "./Banner";
import styled from "styled-components";
import Product from "./Product";
import { ProductContext } from "../../context/ProductContext";
import SingleProduct from "./SingleProduct";
import { Component } from "react";

const Wrapper = styled.div`
  display: flex;
`;
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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleProduct: false,
      product: {},
    };
  }

  updateProduct = (product) => {
    this.setState({ product: product, singleProduct: true });
  };
  render() {
    return (
      <>
        <Wrapper>
          <Sidebar></Sidebar>
          {this.state.singleProduct ? (
            <SingleProduct
              data={this.state.product}
              updateProduct={this.updateProduct}
            />
          ) : (
            <Banner />
          )}
        </Wrapper>

        <ProductContext.Consumer>
          {(value) => (
            <div>
              <Title>
                <h1>Chairs</h1>
                <p>We provide world best wooden chair all over the world</p>
              </Title>
              <Products>
                {value.products.map((product) =>
                  product.fields["Type"] === "Chairs" ? (
                    <Product
                      key={product.id}
                      id={product.id}
                      name={product.fields["Name"]}
                      type={product.fields["Type"]}
                      img={product.fields.Images[0].url}
                      price={"$ " + product.fields["Unit cost"]}
                      handleClick={this.updateProduct}
                      data={product}
                    />
                  ) : (
                    ""
                  )
                )}
              </Products>
              <Title>
                <h1>Lighting</h1>
                <p>Live the life in lighting</p>
              </Title>
              <Products>
                {value.products.map((product) =>
                  product.fields["Type"] === "Lighting" ? (
                    <Product
                      key={product.id}
                      id={product.id}
                      name={product.fields["Name"]}
                      type={product.fields["Type"]}
                      img={product.fields.Images[0].url}
                      price={"$ " + product.fields["Unit cost"]}
                      handleClick={this.updateProduct}
                      data={product}
                    />
                  ) : (
                    ""
                  )
                )}
              </Products>
              <Title>
                <h1>Other</h1>
                <p>
                  We provide varity range of best furnitures all over the world
                </p>
              </Title>
              <Products>
                {value.products.map(
                  (product) =>
                    product.fields["Type"] !== ("Chairs" || "Lighting") && (
                      <Product
                        key={product.id}
                        id={product.id}
                        name={product.fields["Name"]}
                        type={product.fields["Type"]}
                        img={product.fields.Images[0].url}
                        price={"$ " + product.fields["Unit cost"]}
                        handleClick={this.updateProduct}
                        data={product}
                      />
                    )
                )}
              </Products>
            </div>
          )}
        </ProductContext.Consumer>
      </>
    );
  }
}

export default Home;
