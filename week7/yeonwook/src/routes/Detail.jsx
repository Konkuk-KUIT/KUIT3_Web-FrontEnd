import React from "react";
import Header from "../components/Header";
import { data } from "../db";
import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledH2 = styled.h2`
  display: flex;
  color: #1E82FF;
  justify-content: center;
`;

const StyledDiv = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  background-clip:content-box;
  border-width : 10 px;
  border-style : solid;
  border-color : #000000;
  color: #000069;
  &:visited{color: #000069;}
  &:hover{color: #4646CD;}
`;

const Detail = () => {
  return (
    <>
      <Header />
      <StyledH2>상세정보 목록</StyledH2>
      {data.map((data, index) => (
        <StyledDiv key={index}>
          <StyledLink to={`/detail/${index}`}>{data.name}</StyledLink>
        </StyledDiv>
      ))}
    </>
  );
};

export default Detail;
