import React from 'react';
import Header from "../components/Header";
import { data } from "../db";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv1 = styled.div`
    display: flex;
    width: 50px;
    height: 30px;
    text-decoration: none;
    background-color: lightgreen;
    margin: 10px;
    border-radius: 5px;
`;

const StyledLink2 = styled(Link)`
    text-decoration: none;
`

const Detail = () => {
    return (
        <>
            <Header />
            {data.map((data, index) => (
                <StyledDiv1 key={index}>
                    <StyledLink2 to={`/detail/${index}`}>{data.name}</StyledLink2>
                </StyledDiv1>
            ))}
        </>
    );
};

export default Detail;