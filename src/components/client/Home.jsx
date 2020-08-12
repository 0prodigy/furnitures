import React from "react";
import Sidebar from "./Sidebar";
import Banner from "./Banner";
import styled from "styled-components";
import Product from "./Product";

const Wrapper = styled.div`
  display: flex;
`;
const Products = styled.div`
  display: flex;
  flex-wrap: warp;
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

function Home() {
  return (
    <>
      <Wrapper>
        <Sidebar></Sidebar>
        <Banner />
      </Wrapper>
      <Title>
        <h1>Chairs</h1>
        <p>We provide world best wooden chair all over the world</p>
      </Title>
      <Products>
        <Product
          name="Wooden Chair"
          type="Chair"
          img="img/greenchair.PNG"
          price="343"
        />
      </Products>
    </>
  );
}

export default Home;
