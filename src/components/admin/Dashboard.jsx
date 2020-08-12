import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import TopProducts from "./TopProducts";
import Rightnav from "./Rightnav";
import Procard from "./Procard";
import ProductForm from "./ProductForm";
import VendorForm from "./VendorForm";
import DesignerForm from "./DesignerForm";

const Wrapper = styled.div`
  display: flex;
  color: #0d072c;
  Navbar {
    flex: 1;
  }
`;

const MainContent = styled.div`
  flex: 2;
  padding: 0 30px;
`;

const Dashright = styled.div`
  flex: 1;
  flex-basis: 8%;
  background: #fafbfc;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

function Dashboard() {
  return (
    <Wrapper>
      {" "}
      <Navbar />{" "}
      <MainContent>
        <SearchBar />
        {/* <Grid>
          <Procard
            label="Awaiting order"
            stats="30k order"
            img="https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            background="#000"
            color="#fff"
          />
          <Procard
            label="Awaiting order"
            stats="30k order"
            img="https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            background="#fff"
            color="#000"
          />

          <Procard
            label="Awaiting order"
            stats="30k order"
            img="https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            background="#fff"
            color="#000"
          />
          <Procard
            label="Awaiting order"
            stats="30k order"
            img="https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            background="#000"
            color="#fff"
          />
        </Grid>*/}
        {/* <ProductForm /> */}
        <DesignerForm />
        <VendorForm />
      </MainContent>
      <Dashright>
        <Rightnav />
        <TopProducts />
      </Dashright>
    </Wrapper>
  );
}

export default Dashboard;
