import React from "react";
import styled from "styled-components";
import Navlink from "./Navlink";
import { NavigationContext } from "../../context/Navigation";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  border-right: 1px solid #dcdcdc;
  width: 235px;
`;

const Logo = styled.div`
  padding: 10px;
  font-size: 1.5rem;
  color: #000;
`;

function Navbar() {
  return (
    <NavigationContext.Consumer>
      {(value) => (
        <NavWrapper>
          <Logo>Furnitures</Logo>
          <Navlink
            link="#"
            label="Dashboard"
            icon="#"
            update={() => value.update("Dashboard")}
          />
          <Navlink
            link="#"
            label="Product"
            icon="#"
            update={() => value.update("Product")}
          />
          <Navlink
            link="#"
            label="Designer"
            icon="#"
            update={() => value.update("Designer")}
          />
          <Navlink
            link="#"
            label="Vendor"
            icon="#"
            update={() => value.update("Vendor")}
          />
        </NavWrapper>
      )}
    </NavigationContext.Consumer>
  );
}

export default Navbar;
