import React from 'react';
import Header from '../components/Header';
import { data } from '../db';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  display: flex;
  background-color: ${props => props.bgColor};
  color: white;
  padding: 10px;
  border-radius: 10px;
`

const StyledDiv = styled.div`
  display: inline-flex;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 10px;
  border: solid 1px ${props => props.color};
`

const StyledP = styled.p`
  color: skyblue;
  padding-left: 10px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.color};
`;

const Detail = () => {
  const bgColor = "skyblue";
  const color = "gray";
  return (
    <>
      <Header />
      <StyledH1 bgColor={bgColor}>Detail</StyledH1>
      <StyledP>Click on the bottom.</StyledP>
      {data.map((data, index) => (
        <StyledDiv key={index} color={color}>
          <StyledLink to={`/detail/${index}`} color={color}>{data.name}</StyledLink>
        </StyledDiv>
      ))}
    </>
  );
};

export default Detail;