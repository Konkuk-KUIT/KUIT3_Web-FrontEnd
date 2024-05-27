import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-family: "SignikaNegative";
  margin: 10px;
  padding-top: 3px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  background-color: ${(props) => props.bgColor};
`;

const StyledP = styled.p`
  margin: 0 10px;
  font-family: "SunflowerLight";
`;

const Home = () => {
  const bgColor = "skyblue";
  return (
    <>
      <Header />
      <StyledH1 bgColor={bgColor}>Welcome!</StyledH1>
      <StyledP>꾸며진 홈페이지입니다.</StyledP>
    </>
  );
};

export default Home;
