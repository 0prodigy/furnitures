import React from "react";
import styled from "styled-components";

const CardWrap = styled.div`
  width: 260px;
  height: 160px;
  padding: 23px;
  border-radius: 15px;
  backgroud: #fbfcfd;
  color: #1b1d20;
  margin-bottom: 20px;
  .img-container {
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
    padding: 10px;

    img {
      width: 30px;
      height: 30px;
      background: #fff;
      border-radius: 50%;
    }
  }
  h4,
  h5 {
    padding: 5px 0px;
  }
  h5 {
    font-size: 1.3rem;
    font-weight: 500;
  }
  h4 {
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

function Procard(props) {
  const { img, label, stats, background, color } = props;
  return (
    <CardWrap style={{ background: background || "#898eca", color: color }}>
      <div className="img-container">
        <img src={img} alt={label} />
      </div>
      <h5>{label}</h5>
      <h4>{stats}</h4>
    </CardWrap>
  );
}

export default Procard;
