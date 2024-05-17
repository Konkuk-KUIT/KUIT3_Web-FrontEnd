import React from "react";
import Header from "../components/Header";
import { data } from "../db";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
  margin: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Detail = () => {
  const bgColor = "#b0e0e6";

  return (
    <>
      <Header />
      {data.map((data, index) => (
        <StyledDiv bgColor={bgColor} key={index}>
          <StyledLink to={`/detail/${index}`}>{data.name}</StyledLink>
        </StyledDiv>
      ))}
    </>
  );
};

export default Detail;
