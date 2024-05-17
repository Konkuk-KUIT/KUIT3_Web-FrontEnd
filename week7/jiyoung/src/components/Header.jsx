import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 10px;
  outline: 1px solid black;
  padding: 10px;
  width: 100px;
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const Header = () => {
  return (
    <StyledDiv>
      <StyledLink to="/">홈</StyledLink>
      <StyledLink to="detail">상세</StyledLink>
    </StyledDiv>
  );
};

export default Header;
