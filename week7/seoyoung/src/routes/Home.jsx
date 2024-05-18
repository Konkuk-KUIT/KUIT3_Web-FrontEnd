import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  display: flex;
  background-color: ${props => props.bgColor};
  color: white;
  padding: 10px;
  border-radius: 10px;
`

const StyledP = styled.p`
  color: skyblue;
  padding-left: 10px;
`

const Home = () => {
  const bgColor = "skyblue";
  return (
    <>
      <Header />
      <StyledH1 bgColor={bgColor}>Home</StyledH1>
      <StyledP>Welcome.</StyledP>
    </>
  );
};

export default Home;