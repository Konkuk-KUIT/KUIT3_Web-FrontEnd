import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from "../db";
import styled from "styled-components";

const StyledDiv2 = styled.div`
  display: flex;
  font-size: x-large;
  background-color: lightgrey;
  margin: 30px;
`

const User = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <>
    <StyledDiv2>{data[params.id].name}</StyledDiv2>
    <StyledDiv2>{data[params.id].age}</StyledDiv2>
    <StyledDiv2>{data[params.id].description}</StyledDiv2>
    </>
  );
};

export default User;