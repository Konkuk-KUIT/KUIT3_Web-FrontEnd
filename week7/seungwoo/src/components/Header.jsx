import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  margin: 0 15px;

  &:hover {
    color: #ffdd57;
  }
`;

const StyledDiv = styled.div`
  background-color: #1e90ff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header = () => {
  return (
    <StyledDiv>
      <StyledLink to="/">홈</StyledLink>
      <StyledLink to="/detail">상세</StyledLink>
    </StyledDiv>
  );
};

export default Header;
