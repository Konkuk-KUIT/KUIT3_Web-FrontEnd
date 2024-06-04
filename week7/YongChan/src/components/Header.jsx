import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
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