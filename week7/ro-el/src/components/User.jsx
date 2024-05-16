import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../db";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-family: "SunflowerLight";
  padding: 10px;
`;

const StyledH1 = styled.h1`
  font-family: "SunflowerLight";
  font-size: 30px;
  padding: 10px 0;
  border-bottom: 1px solid skyblue;
`;

const StyledP = styled.p`
  font-size: 13px;
  padding: 0 10px 10px;
  border-bottom: 1px solid lightgray;
`;

const StyledH3 = styled.h3`
  font-size: 20px;
  padding: 10px 0;
`;

const User = () => {
  const params = useParams();
  /* 
  console.log(params);
  -> 
  <Route path="/detail/:id" element={<User />} />
  Router에서 파라미터 값을 :id로 지정했기 때문에, console에 { id: 숫자 }값이 찍힘
  
  console.log(params.id);
  -> 숫자만 찍힘
  */
  return (
    <StyledDiv>
      <StyledH1>{data[params.id].name}</StyledH1>
      <StyledP>
        <StyledH3>나이</StyledH3>
        {data[params.id].age}
      </StyledP>
      <StyledP>
        <StyledH3>소개 및 인사</StyledH3>
        {data[params.id].description}
      </StyledP>
    </StyledDiv>
  );
};

export default User;
