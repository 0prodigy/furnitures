import React from "react";
import styled from "styled-components";

const NavWrap = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-around;

  ul {
    display: flex;
    list-style: none;

    a {
      text-decoration: none;
      font-weight: 700;
      font-size: 1rem;
      color: #19301c;
      display: inline-block;
      margin-right: 20px;
    }
  }
`;

function Nav(props) {
  return (
    <NavWrap>
      <div className="left">
        <ul>
          <li>
            <a href="/#">products</a>
          </li>
          <li>
            <a href="/#">about</a>
          </li>
          <li>
            <a href="/#">terms</a>
          </li>
          <li>
            <a href="/#">designers</a>
          </li>
        </ul>
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="/#" onClick={props.toggleSearch}>
              <img src="img/search.PNG" alt="search" />
            </a>
          </li>
          <li>
            <a href="/#">
              <img src="img/user.PNG" alt="user" />
            </a>
          </li>
          <li>
            <a href="/#" onClick={props.toggleCart}>
              <img src="img/cart.PNG" alt="cart" />
            </a>
          </li>
          <li>
            <div className="count">{props.count}</div>
          </li>
        </ul>
      </div>
    </NavWrap>
  );
}

export default Nav;
