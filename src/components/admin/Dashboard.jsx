import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import TopProducts from "./TopProducts";
import Rightnav from "./Rightnav";
import Procard from "./Procard";

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
        <Procard
          label="Awaiting order"
          stats="30k order"
          img="https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        />
        <Procard
          label="Awaiting order"
          stats="30k order"
          img="https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          background="green"
        />
      </MainContent>
      <Dashright>
        <Rightnav />
        <TopProducts />
      </Dashright>
    </Wrapper>
  );
}

export default Dashboard;
