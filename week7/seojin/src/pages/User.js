import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../db";
import { styled } from "styled-components";

const Title = styled.h2`
  margin-left: 30px;
  margin-bottom: 60px;
`;

const Info = styled.div`
  margin-left: 50px;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const User = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <div>
      <Title>Hello! This is about me :)</Title>
      <Info>
        <div>Name: {data[params.id].name}</div>
        <div>Age: {data[params.id].age}</div>
        <div>Address: {data[params.id].address}</div>
        <Link to="/detail">뒤로가기</Link>
      </Info>
    </div>
  );
};

export default User;
