import React from "react";
import Header from "../components/Header.jsx";
import { data } from "../db";
import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledContainer = styled.div`
  font-family: 'Comic Sans MS', cursive, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
const GradientBox = styled.div`
  background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 600px;
  margin: 20px 0;
  text-align: center;
`;
const DataItem = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;

    &:hover {
      color: darkblue;
    }
  }
`;

const Detail = () => {
  return (
    <StyledContainer>
    <>
      <Header />
      <GradientBox>
      {data.map((data, index) => (
        <DataItem key={index}>
          <Link to={`/detail/${index}`}>{data.name}</Link>
        </DataItem>
      ))}
      </GradientBox>
    </>
    </StyledContainer>

  );
};

export default Detail;
