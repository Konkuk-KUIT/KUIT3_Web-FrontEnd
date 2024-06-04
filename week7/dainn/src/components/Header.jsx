import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 20px;
  border: 2px solid;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 30px;
  
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
  font-size: 25px;
  justify-content: center;
  margin: 30px 0px;
  
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
