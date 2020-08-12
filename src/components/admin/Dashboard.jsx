import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import styled from "styled-components";

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
    </Wrapper>
  );
}

export default Dashboard;
