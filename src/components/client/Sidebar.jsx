import React from "react";
import styled from "styled-components";

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
function Sidebar() {
  return (
    <Wrapper>
      <div className="logo-container">
        <button>
          <img src="img/logo.PNG" alt="logo" />
        </button>
      </div>
      <div>
        <button>
          <img src="img/toggle.PNG" alt="toggle" />
        </button>
      </div>
      <div className="social">
        <button>
          <img src="img/fb.PNG" alt="toggle" />
        </button>
        <button>
          <img src="img/twitter.PNG" alt="toggle" />
        </button>
        <button>
          <img src="img/insta.PNG" alt="toggle" />
        </button>
      </div>
    </Wrapper>
  );
}

export default Sidebar;
