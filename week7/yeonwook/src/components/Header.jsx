import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  background-clip:content-box;
  background-color: #D7F1FA;
  border-width : 10 px;
  border-style : solid;
  border-color : #000069;
  color: #000069;
  &:visited{color: #000069;}
  &:hover{color: #96A5FF;}
`;

const StyledDiv = styled.div`
  display: flex;
  padding: 80px;
  gap: 40px;
  justify-content: center;
`;

const Header = () => {
  return (
    <StyledDiv>
      <StyledLink to="/">홈으로 이동</StyledLink>
      <StyledLink to="/detail">상세정보로 이동</StyledLink>
    </StyledDiv>
  );
};

export default Header;
