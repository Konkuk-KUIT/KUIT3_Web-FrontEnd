import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../db';
import Header from '../components/Header';
import styled from 'styled-components';

const StyledH3 = styled.h3`
  color: ${props => props.color};
`

const StyledDiv = styled.div`
  font-size: 15px;
  padding: 5px 0;
`

const StyledBox = styled.div`
  background-color: #e3e3e3;
  margin-top: 10px;
  padding: 20px;
  border-radius: 10px;
`

const getColor = (name) => {
  const colors = {
    "white": "white",
    "skyblue": "skyblue",
    "blue": "blue",
  };
  return colors[name] || "white";
};

const User = () => {
  const params = useParams();
  const color = getColor(data[params.id].name);
  
  return (
    <>
      <Header />
      <StyledBox>
        <StyledH3 color={color}>{data[params.id].name}</StyledH3>
        <StyledDiv>{data[params.id].colorCode}</StyledDiv>
        <StyledDiv>{data[params.id].description}</StyledDiv>
      </StyledBox>
    </>
  );
};

export default User;