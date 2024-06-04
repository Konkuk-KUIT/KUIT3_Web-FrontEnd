import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle,faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    color: #007bff;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;
  background-image : url('/image/header.jpg');
  background-size : cover;
  background-position : center;
  border-bottom: 1px solid #dee2e6;
`;

const Header = () => {
  return (
    <StyledDiv>
      <StyledLink to="/">
        <FontAwesomeIcon icon={faHome} />
        홈
      </StyledLink>
      <StyledLink to="/detail">
        <FontAwesomeIcon icon={faInfoCircle} />
        상세
      </StyledLink>
      <StyledLink to="/login">
        <FontAwesomeIcon icon={faSignInAlt} />
        로그인
      </StyledLink>
    </StyledDiv>
  );
};

export default Header;
