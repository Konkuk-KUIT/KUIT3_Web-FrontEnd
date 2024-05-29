import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../db";
import styled from "styled-components"

const StyledContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
`;

const StyledName = styled.div`
  color: #333;
  font-size: 2em;
  margin-bottom: 10px;
`;

const StyledAge = styled.div`
  color: #666;
  font-size: 1.2em;
  margin-bottom: 20px;
`;

const StyledDescription = styled.div`
  color: #444;
  font-size: 1em;
  line-height: 1.5;
`;

const User = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <StyledContainer>
      <StyledName>{data[params.id].name}</StyledName>
      <StyledAge>{data[params.id].age}</StyledAge>
      <StyledDescription>{data[params.id].description}</StyledDescription>
    </StyledContainer>
  );
};

export default User;
