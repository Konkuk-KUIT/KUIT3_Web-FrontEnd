import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #000;
  font-size: 18px;
  font-weight: bold;
  background-color: #FFF;
  padding: 10px 20px;
  border: 2px solid #99CCFF;
  border-radius: 5px;

  &:hover {
    color: #000;
    background-color: #99CCFF;
    text-decoration: none;
    border: 2px solid #0B7BB0;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 20px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #FFF;
  padding: 10px;
  z-index: 1000;
`

const Header = () => {
  return (
    <StyledDiv>
      <StyledLink to="/">Move to Home</StyledLink>
      <StyledLink to="/detail">Move to Detail</StyledLink>
    </StyledDiv>
  );
};

export default Header;