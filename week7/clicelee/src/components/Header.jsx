import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: gray;
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
  display: flex;
  font-family: 'Comic Sans MS';
  padding: 8px;
  font-size: 15px;
  border-radius: 50px; 
  background: linear-gradient(to bottom, #f0f0f0, #dddddd);
  `;

const Header = () => {
  return (
    <StyledDiv>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/detail">WorkBook</StyledLink>
    </StyledDiv>
  );
};

export default Header;
