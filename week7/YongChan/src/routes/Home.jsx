import React from 'react'
import Header from '../components/Header';
import styled from 'styled-components';


const StyledH1 = styled.h1`
  text-decoration: none;
  display: flex;
  box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.07),
  0px -3px 7px 1px rgba(0, 0, 0, 0.07);
  color: #dca15d;
  line-height: 1.4;
  padding: 0.25em;
`;

const Home = () => {
  const bgColor="skyblue";
  return (
    <>
      <Header />
      <StyledH1 bgColor={bgColor}>여행 리스트</StyledH1>
      <p>
        다음에 갈 곳
      </p>
    </>
  )
}

export default Home;