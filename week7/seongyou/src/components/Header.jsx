import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv3 = styled.div`
  background-color: #EEEEEE;
`

const StyledLink1 = styled(Link)`
  font-size: x-large;
  font-weight: bold;
  text-decoration: none;
  background-color: lightgrey;
  margin: 10px;
`;

const Header = () => {
  return (
    <StyledDiv3>
      <StyledLink1 to="/">홈</StyledLink1>
      <StyledLink1 to="/detail">상세</StyledLink1>
      <StyledLink1 to="/login">로그인</StyledLink1>
    </StyledDiv3>
  );
};

export default Header;