import React from "react";
import useCartStore from "../../store/useCartStore";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledOrderBar = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  height: 111px;
  border-radius: 16px 16px 0px 0px;
  background: #FFFFFF;
  box-shadow: 0px -8px 16px 0px #0000001A;
  font-family: 'Pretendard', sans-serif;
  justify-content: space-between;
`;

const StyledTotalAmount = styled.div`
  color: #6B7684;
  font-size: 15px;
  font-weight: 400;
  line-height: 17.9px;
  text-align: left;
  display: flex;
  height: 18px;
  margin-top: 16px;
  margin-left: 24px;
`;

const StyledTotalValue = styled.div`
  color: #4E5968;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: left;
  display: flex;
  height: 20px;
  margin-top: 5px;
  margin-left: 24px;
`;

const StyledOrderButton = styled.div`
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 500;
  background: #3182F6;
  height: 18px;
  margin-top: 19px;
  margin-right: 24px;
  padding: 10px 16px;
  border-radius: 8px;
  text-align: center;
`;

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const navigate = useNavigate();
  const handleOrder = () => {
    navigate("/cart");
  };

  return (
    <StyledOrderBar>
      <div>
        <StyledTotalAmount>총 주문금액</StyledTotalAmount>
        <StyledTotalValue>{menus.reduce((acc, cur) => acc + cur.price, 0).toLocaleString()}원</StyledTotalValue>
      </div>
      <StyledOrderButton onClick={handleOrder} type="button">주문하기</StyledOrderButton>
    </StyledOrderBar>
  );
};

export default OrderBar;