import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../db';
import GoBack from '../components/GoBack';
import styled from 'styled-components';

const StyledH2 = styled.h2`
    display: flex;
    color: skyblue;
    padding: 10px 0px 10px 180px;
    border-top: 1px solid skyblue;
    border-bottom: 1px solid skyblue;
`;

const StyledDiv = styled.div`
    display: flex;
    padding: 0px 0px 20px 180px;
`;

const User = () => {
    const params = useParams();
    console.log(params.id);
  return (
    <>
    <GoBack />
        <StyledH2>{data[params.id].name}</StyledH2>
        <StyledDiv>{data[params.id].professor}</StyledDiv>
        <StyledDiv>{data[params.id].description}</StyledDiv>
    </>
  )
}

export default User