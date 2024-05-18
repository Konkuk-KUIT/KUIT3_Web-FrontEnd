import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  display: inline-block;
  background-color: ${props => props.bgColor};
  padding: 10px;
  border-radius: 5px;
`

const StyledP = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto;
`

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 50px;
`;

const Home = () => {
  const bgColor = "#99CCFF";
  return (
    <CenteredContainer>
      <Header />
      <StyledH1 bgColor={bgColor}>Home</StyledH1>
      <StyledP>홈페이지입니다!</StyledP>
    </CenteredContainer>
  );
};

export default Home;