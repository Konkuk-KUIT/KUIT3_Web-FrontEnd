import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  border: 2px solid skyblue;
  padding: 5px;
  border-radius: 5px;
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-around;
`;

const GoBack = () => {
  return (
    <StyledDiv>
        <StyledLink to="/detail">뒤로 가기</StyledLink>
    </StyledDiv>
  )
}

export default GoBack;