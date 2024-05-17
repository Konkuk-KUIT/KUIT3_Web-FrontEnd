import React from 'react';
import { useParams } from "react-router-dom";
import { data } from "../db";
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const DateText = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SequenceText = styled.div`
  font-size: 20px;
  color: #FFF;
  background-color: #0B7BB0;
  font-weight: bold;
  margin-bottom: 20px;
`;

const DescriptionText = styled.div`
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  background-color: #99CCFF;
`;

const User = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <Container>
      <DateText>{data[params.id].date}</DateText>
      <SequenceText>{data[params.id].sequence}</SequenceText>
      <DescriptionText>{data[params.id].description}</DescriptionText>
    </Container>
  );
};

export default User;