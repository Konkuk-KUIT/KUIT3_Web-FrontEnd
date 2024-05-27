import React from 'react'
import Header from '../components/Header';
import {data} from "../db";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Contatiner = styled.div`
  flex-direction: column;
  gap: 50px;
  border-radius: 3px;
  font-size: 20px;
  display: grid;
  place-items: center;
  padding: 30px;
  background-color: #458179;
  color: white;
  font-weight: bold;
  margin-top: 20px;
`;

const Detail = () => {
  return (
    <>
      <Header />
      <Contatiner>
          {data.map((data,index)=>(
              <StyledLink to={`/detail/${index}`}>{data.country}</StyledLink>
          ))}
      </Contatiner>
    </>

  )
}

export default Detail;