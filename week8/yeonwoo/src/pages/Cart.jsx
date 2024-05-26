import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import leftChevron from '../assets/left-chevron.svg';
import stores from "../models/stores";

const StyledHeader = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 88px;
  background: #FFFFFF;
  justify-content: space-between;
`;

const StyledBack = styled(Link)`
  border: 0px;
  background: transparent;
  margin-top: 54px;
  margin-left: 10px;
  text-decoration: none;
`;

const Cart = () => {
  const { id } = useParams();
  const store = stores.find(store => store.id === parseInt(id));

  return (
    <StyledHeader>
        <StyledBack to="/store">
          <img src={leftChevron} alt="뒤로 가기"/>
        </StyledBack>
    </StyledHeader>
  );
};

export default Cart;