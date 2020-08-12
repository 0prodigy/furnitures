import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import Product from "./Product";

const Wrapper = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 60%;
`;

function Dashboard() {
  return (
    <Wrapper>
      {" "}
      <Navbar />{" "}
      <MainContent>
        <SearchBar />
      </MainContent>
      <div>
        <Product
          img="#"
          name="something big to check"
          description="some description make your page or section look good"
          price="$54"
        />
        <Product img="#" name="something " description="some " price="$54" />
      </div>
    </Wrapper>
  );
}

export default Dashboard;
