import React from 'react';
import Header from "../components/Header";
import styled from "styled-components";

const StyledH1 = styled.h1`
  display: flex;
  background-color: ${(props) => props.bgColor};
  text-decoration: none;
`;

const StyledP = styled.p`
  display: flex;
  font-size: x-large;
  background-color: yellowgreen;
  text-decoration: none;
  margin: 10px;
`

const Home = () => {
  const bgColor = "lightgreen";

  return (
    <>
        <Header />
        <StyledH1 bgColor={bgColor}>홈</StyledH1>
        <StyledP>홈페이지 입니다.</StyledP>
    </>
  );
};

export default Home;