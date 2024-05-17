import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: skyblue;
  padding: 10px 20px;
  border-radius: 10px;
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 100px;
  justify-content: center;
  padding-bottom: 10px;
  border-bottom: solid 1px #e2e2e2;
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