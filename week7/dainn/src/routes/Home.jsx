import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const StyledH1 = styled.h1`
  display: flex;
  background-color: ${(props) => props.bgColor};
  justify-content: center;

`;

const Styledp = styled.p`
  display: flex;
  justify-content: center;
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 600px;
  border: 2px solid;
  border-radius: 15px;
`;

const Home = () => {
  const bgColor = "skyblue";
  return (
    <StyledDiv>
      <Header />
      <StyledH1 bgColor={bgColor}>홈</StyledH1>
      <Styledp>홈페이지 입니다.</Styledp>
    </StyledDiv>
  );
};

export default Home;
