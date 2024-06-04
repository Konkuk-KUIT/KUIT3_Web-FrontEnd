import React from "react";
import Header from "../components/Header";
import { data } from "../db";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  margin: 20px;
  justify-content: center;
  font-size: 20px;
  color:
`;

const StyledDiv = styled.div`
  border: 2px solid;
  margin: 10px;
  border-radius: 15px;
  background-color: rgb(215, 177, 233);
`;

const StyledDiv1 = styled.div`
  width: 100%;
  height: 600px;
  border: 2px solid;
  border-radius: 15px;

`;

const Detail = () => {
  return (
    <>
    <StyledDiv1>
      <Header />
        {data.map((data, index) => (
          <StyledDiv key={index}>
            <StyledLink to={`/detail/${index}`}>{data.name}</StyledLink>
          </StyledDiv>
        ))}
      </StyledDiv1>

    </>
  );
};

export default Detail;
