import React from "react";
import styled from "styled-components";
const Bar = styled.div`
  padding: 20px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  min-width: 400px;
  font-weight: 500;
  border: 1px solid #dedede;
  border-right: none;
`;
const Btn = styled.button`
  padding: 10px;
  border: 1px solid #dedede;
  border-left: none;
  background: transparent;
`;
function SearchBar(props) {
  return (
    <Bar>
      <div>
        <Input placeholder="Search Here" name="searchQuery" />
        <Btn>Search</Btn>
      </div>
    </Bar>
  );
}

export default SearchBar;
