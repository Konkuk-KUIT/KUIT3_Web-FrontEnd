import React from "react";
import useCartStore from "../../store/useCartStore";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledDiv1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0px;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px -8px 16px 0px #0000001A;
`
const StyledDiv2 = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledText = styled.div`
  margin-top: 16px;
  margin-left: 24px;
  font-size: 15px;
  font-weight: 500;
  font-family: Pretendard;
  text-align: left;
  color: #6B7684;
`
const TotalFee = styled.div`
  margin-top: 5px;
  margin-left: 24px;
  margin-bottom: 18px;
  font-size: 17px;
  font-weight: 600;
  font-family: Pretendard;
  text-align: left;
  color: #4E5968;

`
const OrderBtn = styled.button`
  margin-top: 16px;
  margin-right: 24px;
  width: 84px;
  height: 38px;
  border-radius: 8px;
  border: 0px;
  color: white;
  background-color: #3182F6;
  font-size: 15px;
  font-weight: 500;
`

const OrderBar = () => {
  const navigate = useNavigate();
  const menus = useCartStore((state) => state.menus);
  const handleOrder = () => { 
    navigate("/cart");  // 장바구니 페이지로 이동
  };
  const store = useCartStore((state) => state.store);

  return (
    <StyledDiv1>
      <StyledDiv2>
        <StyledText>총 주문금액</StyledText>
        <TotalFee>{menus.reduce((acc, cur) => acc + cur.price, 0).toLocaleString("ko-KR")}원</TotalFee>
      </StyledDiv2>
      <OrderBtn onClick={handleOrder} type="button">
        주문하기
      </OrderBtn>
    </StyledDiv1>
  );
};

export default OrderBar;
