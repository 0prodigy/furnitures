import React from "react";
import Sidebar from "./Sidebar";
import Banner from "./Banner";
import styled from "styled-components";
import Product from "./Product";
import { ProductContext } from "../../context/ProductContext";
import SingleProduct from "./SingleProduct";
import { Component } from "react";
import Footer from "./Footer";
import Cart from "./Cart";
import Search from "./Search";

const Wrapper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;

  .show-cart {
    position: absolute;
    background: #fafbfc;
    min-width: 400px;
    min-height: 100vh;
    top: 60px;
    right: 0;
    transition: all 1.2s ease;
  }
  .hide-cart {
    position: absolute;
    background: #fafbfc;
    min-width: 400px;
    min-height: 100vh;
    top: 60px;
    right: 0;
    transition: all 1.2s ease;
    transform: translateX(100%);
  }
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
  padding: 25px 35px 25px;
  max-width: 1100px;
  margin: auto;
  text-align: center;
  h1 {
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 2;
    color: #333;
  }
`;

const Main = styled.main`
  .show-search {
    position: fixed;
    height: 100%;
    width: 100%;
    transform: translateY(0%);
    overflow-y: scroll;
    top: 0;
    transition: all 2s ease;
  }
  .hide-search {
    position: fixed;
    height: 100%;
    width: 100%;
    transform: translateY(-100%);
    overflow-y: scroll;
    top: 0;
    transition: all 2s ease;
  }
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleProduct: false,
      product: {},
      cart: [],
      cartHidden: true,
      searchHidden: true,
    };
  }

  toggleCart = () => {
    this.setState({ cartHidden: !this.state.cartHidden });
  };

  updateCart = () => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, this.state.product],
    }));
  };

  updateProduct = (product) => {
    this.setState({ product: product, singleProduct: true });
  };

  redirectToHome = () => {
    this.setState({ singleProduct: false });
  };

  handleClose = () => {
    this.setState({ searchHidden: !this.state.searchHidden });
  };
  render() {
    return (
      <Main>
        <Wrapper>
          <div className={!this.state.cartHidden ? "show-cart" : "hide-cart"}>
            <Cart data={this.state.cart} />
          </div>

          <Sidebar toHome={this.redirectToHome}></Sidebar>
          {this.state.singleProduct ? (
            <SingleProduct
              style={{ bakground: "red" }}
              data={this.state.product}
              updateProduct={this.updateProduct}
              count={this.state.cart.length}
              updateCart={this.updateCart}
              toggleCart={this.toggleCart}
              toggleSearch={this.handleClose}
            />
          ) : (
            <Banner
              count={this.state.cart.length}
              toggleCart={this.toggleCart}
              toggleSearch={this.handleClose}
            />
          )}
        </Wrapper>

        <ProductContext.Consumer>
          {(value) => (
            <div>
              <div
                className={
                  !this.state.searchHidden ? "show-search" : "hide-search"
                }
              >
                <Search data={value.products} handleClose={this.handleClose} />
              </div>
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
        <Footer />
      </Main>
    );
  }
}

export default Home;
