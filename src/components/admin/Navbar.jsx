import React from "react";
import styled from "styled-components";
import Navlink from "./Navlink";

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
    <NavWrapper>
      <Logo>Furnitures</Logo>
      <Navlink link="#" label="Dashboard" icon="#" />
      <Navlink link="#" label="Dashboard" icon="#" />
      <Navlink link="#" label="Dashboard" icon="#" />
      <Navlink link="#" label="Dashboard" icon="#" />
    </NavWrapper>
  );
}

export default Navbar;
