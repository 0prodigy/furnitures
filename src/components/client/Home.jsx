import React from "react";
import Sidebar from "./Sidebar";
import Banner from "./Banner";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

function Home() {
  return (
    <Wrapper>
      <Sidebar></Sidebar>
      <Banner />
    </Wrapper>
  );
}

export default Home;
