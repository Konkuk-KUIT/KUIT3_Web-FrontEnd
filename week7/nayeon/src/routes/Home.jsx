import React from "react";
import Header from "../components/Header.jsx";
import styled from "styled-components";

const StyledH1 = styled.h1`
  display: flex;
  background-color: ${(props) => props.bgColor};
`;

const Home = () => {
  const bgColor = "skyblue";
  return (
    <>
      <Header />
      <StyledH1 bgColor={bgColor}>홈</StyledH1>
      <p>홈페이지 입니다.</p>
    </>
  );
};

export default Home;
