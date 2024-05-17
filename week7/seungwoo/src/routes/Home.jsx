import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const StyledH1 = styled.h1`
  background-color: ${(props) => props.bgColor || "skyblue"};
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledWrap = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
  box-sizing: border-box;
  text-align: center;
`;

const Home = () => {
  const bgColor = "skyblue";
  return (
    <StyledWrap>
      <Header />
      <StyledH1 bgColor={bgColor}>홈</StyledH1>
      <p>홈페이지 입니다.</p>
    </StyledWrap>
  );
};

export default Home;
