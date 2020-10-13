import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  padding: 10px 0;
  background: transparent;
  a {
    padding: 10px;
    color: #737373d1;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    font-size: 1.1rem;
    font-weight: 600;
    span {
      display: block;
    }
  }
`;

function Navlink(props) {
  const { link, label, icon, update } = props;
  return (
    <Nav>
      <a href={link} onClick={update}>
        <span className="label">{label}</span>
        <span className="icon">{icon}</span>
      </a>
    </Nav>
  );
}

export default Navlink;
