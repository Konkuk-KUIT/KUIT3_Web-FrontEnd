import React from "react";
import Header from "../components/Header.jsx";
import styled from "styled-components";

const StyledH1 = styled.h1`
  display: flex;
  background-color: ${(props) => props.bgColor};
  font-family: 'Comic Sans MS', cursive, sans-serif;
  padding: 20px;
  border-radius: 20px; 
  justify-content: center;

`;

const StyledH2 = styled.h2`
  display: flex;
  font-family: 'Comic Sans MS';
  padding: 20px;
  border-radius: 20px; 
  font-size: 20px;
  justify-content: center;
`;

const Home = () => {
  const bgColor = "skyblue";
  return (
    <>
      <Header />
      <StyledH1 bgColor={bgColor}>Home, Sweet Home🏠</StyledH1>
      <StyledH2>Hello! Welcome back🤗</StyledH2>
    </>
  );
};

export default Home;
