import React from 'react'
import Header from "../components/Header";
import styled from 'styled-components';

const StyledH1 = styled.h1`
    display: flex;
    background-color: ${props => props.bgColor};
    padding-left: 180px;
`;

const StyledP = styled.p`
    display: flex;
    padding-left: 180px;
`;

const Home = () => {
    const bgColor = "skyblue";
  return (
    <>
        <Header />
        <StyledH1 bgColor={bgColor}>홈</StyledH1>
        <StyledP>홈페이지입니다.</StyledP>
    </>
  )
}

export default Home;