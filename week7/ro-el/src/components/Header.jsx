import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 17px;
  border: 1px solid skyblue;
  border-radius: 5px;
  padding: 5px 20px;
  font-family: "SignikaNegative";
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
  border-bottom: 1px solid skyblue;
`;

const Header = () => {
  return (
    <StyledDiv>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/detail">Detail</StyledLink>
    </StyledDiv>
  );
};

export default Header;
