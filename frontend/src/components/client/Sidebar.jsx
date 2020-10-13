import React from "react";
import styled from "styled-components";
import { NavigationContext } from "../../context/Navigation";

const Wrapper = styled.div`
  width: 120px;
  height: 100vh;
  background: #fff;
  color: #5c7d62;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  button {
    border: none;
    cursor: pointer;
    background: transparent;
  }
  .social {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 30%;
  }
`;
function Sidebar(props) {
  return (
    <Wrapper>
      <div className="logo-container">
        <button onClick={props.toHome}>
          <img src="img/logo.PNG" alt="logo" />
        </button>
      </div>
      <div>
        <NavigationContext.Consumer>
          {(value) => (
            <button>
              <img
                src="img/toggle.PNG"
                alt="toggle"
                onClick={value.toggleAdmin}
              />
            </button>
          )}
        </NavigationContext.Consumer>
      </div>
      <div className="social">
        <button>
          <img src="img/fb.PNG" alt="fb" />
        </button>
        <button>
          <img src="img/twitter.PNG" alt="twitter" />
        </button>
        <button>
          <img src="img/insta.PNG" alt="insta" />
        </button>
      </div>
    </Wrapper>
  );
}

export default Sidebar;
