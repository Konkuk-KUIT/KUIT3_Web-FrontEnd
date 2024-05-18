import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../db";
import styled from "styled-components";

const StyledDiv = styled.div`
  justify-content: center;
  width: 100%;
  height: 600px;
  border: 2px solid;
  border-radius: 15px;
`;


const StyledDiv1 = styled.div`
  display: flex;
  justify-content: center;
  font-size: 70px;
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin: 20px;
  font-weight: bolder;
  background-color: rgb(191, 235, 213);
  border-radius: 20px;
`;

const StyledDiv3 = styled.div`
  display: flex;
  justify-content: center;
  
  font-size: 20px;
`;

const User = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <StyledDiv>
      <StyledDiv1>{data[params.id].emoji}</StyledDiv1>
      <StyledDiv2>{data[params.id].name}</StyledDiv2>
      <StyledDiv3>{data[params.id].description}</StyledDiv3>
    </StyledDiv>
  );
};

export default User;
