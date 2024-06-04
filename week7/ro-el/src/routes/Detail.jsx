import React from "react";
import Header from "../components/Header";
import { data } from "../db";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 0 10px;
`;

const StyledDiv = styled.div`
  font-family: "SunflowerLight";
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const StyledEtc = styled.span`
  display: block;
  width: 100%;
  padding: 5px 0;
  text-align: center;
  font-family: "SunflowerLight";
  font-size: 10px;
  text-decoration: none;
  color: lightgray;
`;

const StyledSpan = styled.span`
  display: block;
  width: 70px;
  text-align: center;
`;

const Detail = () => {
  return (
    <>
      <Header />
      <StyledContainer>
        <StyledDiv>
          <StyledLink>
            <StyledSpan>이름</StyledSpan>
            <StyledSpan>나이</StyledSpan>
          </StyledLink>
        </StyledDiv>
      </StyledContainer>
      <StyledContainer>
        {data.map((data, index) => (
          <StyledDiv key={index}>
            <StyledLink to={`/detail/${index}`}>
              <StyledSpan>{data.name}</StyledSpan>
              <StyledSpan>{data.age}</StyledSpan>
            </StyledLink>
          </StyledDiv>
        ))}
        <StyledEtc>사람을 눌러보세요!</StyledEtc>
      </StyledContainer>
    </>
  );
};

export default Detail;
