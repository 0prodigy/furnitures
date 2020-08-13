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
import { Component } from "react";
import { NavigationContext } from "../../context/Navigation";

const Wrapper = styled.div`
  display: flex;
  color: #0d072c;
  Navbar {
    flex: 1;
  }
  button {
    cursor: pointer;
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

const Board = styled.div`
  box-sizzing: border-box;
`;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: "Dashboard",
    };
  }

  render() {
    return (
      <Wrapper>
        {" "}
        <Navbar updatePreview={this.updatePreview} />{" "}
        <MainContent>
          <SearchBar />
          <NavigationContext.Consumer>
            {(value) => (
              <div>
                {value.preview === "Dashboard" && (
                  <Board>
                    <Grid>
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
                    </Grid>
                  </Board>
                )}
                {value.preview === "Product" && <ProductForm />}
                {value.preview === "Designer" && <DesignerForm />}
                {value.preview === "Vendor" && <VendorForm />}
              </div>
            )}
          </NavigationContext.Consumer>
        </MainContent>
        <Dashright>
          <Rightnav />
          <TopProducts label="Hot Selling Products" />
        </Dashright>
      </Wrapper>
    );
  }
}

Dashboard.contextType = NavigationContext;

export default Dashboard;
