import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const StyledH1 = styled.h1`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
  color: white;
`;

const StyledP = styled.p`
  display: flex;
  justify-content: center;
`;

const Home = () => {
  const bgColor = "skyblue";

  return (
    <>
      <Header />
      <StyledH1 bgColor={bgColor}>Home</StyledH1>
      <StyledP>홈페이지 입니다.</StyledP>
    </>
  );
};

export default Home;
