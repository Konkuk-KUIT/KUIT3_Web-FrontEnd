import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { data } from "../db";

const UserContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: 'Gulim', sans-serif;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: 'Gulim', sans-serif;
`;

const Description = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Details = styled.div`
  font-size: 16px;
  color: #666;
`;

const User = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <UserContainer>
      <Title>{data[params.id].title}</Title>
      <Description>{data[params.id].description}</Description>
      <Details>{data[params.id].details}</Details>
    </UserContainer>
  );
};

export default User;
