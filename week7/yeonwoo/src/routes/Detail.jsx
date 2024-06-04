import React from 'react'
import Header from '../components/Header';
import { data } from "../db";
import { Link }from "react-router-dom";
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledH1 = styled.h1`
    display: flex;
    background-color: skyblue;
    padding-left: 180px;
`;

const StyledDiv = styled.div`
    display: flex;
    padding: 20px 0px 20px 180px;
    &:first-child {
        padding-top: 0;
    }
    &:not(:last-child) {
        border-bottom: 1px solid skyblue;
    }
`;

const Detail = () => {
  return (
    <>
    <Header />
    <StyledH1>수업</StyledH1>
    <div>
    {data.map((data, index) => (
        <StyledDiv key={index}>
            <StyledLink to={`/detail/${index}`}>{data.name}</StyledLink>
        </StyledDiv>
    ))}
    </div>
    </>
  )
}

export default Detail; 