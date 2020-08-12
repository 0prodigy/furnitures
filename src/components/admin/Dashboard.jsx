import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import TopProducts from "./TopProducts";

const Wrapper = styled.div`
  display: flex;
  color: #0d072c;
  Navbar {
    flex: 1;
  }
`;

const MainContent = styled.div`
  flex: 2;
`;

const Dashright = styled.div`
  flex: 1;
  flex-basis: 8%;
  background: #fafbfc;
`;

function Dashboard() {
  return (
    <Wrapper>
      {" "}
      <Navbar />{" "}
      <MainContent>
        <SearchBar />
      </MainContent>
      <Dashright>
        <TopProducts />
      </Dashright>
    </Wrapper>
  );
}

export default Dashboard;
