import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../db";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledH3 = styled.h3`
  padding: 80px;
  display: flex;
  color: #000069;
  justify-content: center;
  background-color: #D7F1FA;
`;

const StyledP = styled.p`
  padding: 10px;
  display: flex;
  color: #1E82FF;
  justify-content: center;
`;

const User = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <StyledDiv>
      <StyledH3>{data[params.id].name}</StyledH3>
      <StyledP>{data[params.id].age}</StyledP>
      <StyledP>{data[params.id].description}</StyledP>
    </StyledDiv>
  );
};

export default User;
