import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../db";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
  gap: 10px;
  padding: 10px;
`;

const User = () => {
  const bgColor = "#dcdcdc";
  const params = useParams();
  console.log(params.id);

  return (
    <StyledDiv bgColor={bgColor}>
      <div>{data[params.id].name}</div>
      <div>{data[params.id].artist}</div>
      <div>{data[params.id].description}</div>
    </StyledDiv>
  );
};

export default User;
