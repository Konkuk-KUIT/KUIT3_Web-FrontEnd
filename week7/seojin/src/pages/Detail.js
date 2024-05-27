import React from "react";
import { data } from "../db";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Title = styled.h2`
  margin-left: 30px;
`;

const Data = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 25px;
`;

const Detail = () => {
  return (
    <div>
      <Title>여기는 상세페이지!</Title>
      <Data>
        {data.map((data, index) => (
          <div key={index}>
            <Link to={`/detail/${index}`}>{data.name}</Link>
          </div>
        ))}
      </Data>
    </div>
  );
};

export default Detail;
