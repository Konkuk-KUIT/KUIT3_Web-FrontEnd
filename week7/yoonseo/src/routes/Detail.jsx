import React from 'react';
import Header from '../components/Header';
import { data } from '../db';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  text-align: center;
  padding-top: 60px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #000;
  font-size: 14px;
  font-weight: bold;
  background-color: #FFF;
  padding: 10px 20px;
  border: 2px solid #0B7BB0;
  border-radius: 5px;
  margin: 5px;

  &:hover {
    color: #000;
    background-color: #0B7BB0;
    text-decoration: none;
    border: 2px solid #0B7BB0;
  }
`;

const Detail = () => {
  return (
    <PageContainer>
      <Header />
      {data.map((data, index) => (
        <LinkContainer key={index}>
          <StyledLink to={`/detail/${index}`}>{data.date}</StyledLink>
        </LinkContainer>
      ))}
    </PageContainer>
  );
};

export default Detail;