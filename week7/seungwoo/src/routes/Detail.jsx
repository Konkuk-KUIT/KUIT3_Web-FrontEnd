import React from "react";
import Header from "../components/Header";
import { data } from "../db";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #f0f8ff;
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 1.2em;

  &:hover {
    color: #1e90ff;
  }
`;

const Detail = () => {
  return (
    <>
      <Header />
      {data.map((data, index) => (
        <StyledDiv key={index}>
          <StyledLink to={`/detail/${index}`}>{data.name}</StyledLink>
        </StyledDiv>
      ))}
    </>
  );
};

export default Detail;
