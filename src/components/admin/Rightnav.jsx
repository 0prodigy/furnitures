import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 20px;
  .left {
    float: left;
  }
  .right {
    float: right;
    img {
      width: 30px;
      height: 30px;
      border-radius: 5px;
    }
  }
  span {
    text-align: center;
    padding: 10px;
    cursor: pointer;
  }
`;

function Rightnav() {
  return (
    <Nav>
      <div className="left">
        <span>Notification</span>
        <span>Messages</span>
        <span>Logout</span>
      </div>
      <div className="right">
        <img
          src="https://images.unsplash.com/photo-1561363232-14c6bf728839?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="user"
        />
      </div>
    </Nav>
  );
}

export default Rightnav;
