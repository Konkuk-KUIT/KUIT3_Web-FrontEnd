import React from "react";
import useCartStore from "../store/useCartStore";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledDiv = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: space-between;
  height: 111px; 
  border-radius: 16px 16px 0px 0px;
  background: #FFFFFF;
  box-shadow: 0px -8px 16px 0px #0000001A;

`;

const StyledTotal = styled.div`
  display: flex;
  margin-left: 24px;
  margin-top: 16px;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  line-height: 17.9px;
  text-align: left;
  color: #6B7684;
`;

const StyledButton = styled.button`
height: 38px;
padding: 10px 16px 10px 16px;
gap: 0px;
border-radius: 8px;
margin-right: 24px;
margin-top: 19px;
background: #3182F6;
font-family: Pretendard;
font-size: 15px;
font-weight: 500;
line-height: 17.9px;
text-align: center;
color: #FFFFFF;
border: 0;
`;

const StyledMoney = styled.div`
margin-left: 24px;
margin-top: 5px;
font-family: Pretendard;
font-size: 17px;
font-weight: 600;
line-height: 20.29px;
color: #4E5968;
`;

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const navigate = useNavigate();  // useNavigate 훅 사용
  const handleOrder = () => {
    navigate("/cart");  // ./cart로 네비게이트
  };
  return (
    <StyledDiv>
      <div>
      <StyledTotal>총 주문금액</StyledTotal>
      <StyledMoney>{menus.reduce((acc, cur) => acc + cur.price, 0).toLocaleString()}원</StyledMoney>
      </div>
      <StyledButton onClick={handleOrder} type="button">주문하기</StyledButton>
    </StyledDiv>
  );
};

export default OrderBar;