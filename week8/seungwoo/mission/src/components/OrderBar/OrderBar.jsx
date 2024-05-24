import React from "react";
import useCartStore from "../../store/useCartStore";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { insertComma } from "../../store/insertComma";

const Stylednav = styled.nav`
  position: fixed;
  bottom: 0px;

  width: 390px;
  height: 111px;
  border-radius: 16px 16px 0px 16px;
  box-shadow: 0px -8px 16px 0px #0000001a;
  background-color: #FFFFFF;
  z-index: 1000;
`;

const StyledTotalOrder = styled.span`
  position: absolute;
  top: 16px;
  left: 24px;
  width: 69px;
  height: 18px;

  font-weight: 400;
  font-size: 15px;
  line-height: 17.9px;
  color: #6b7684;
`;

const StyledTotalFee = styled.span`
  position: absolute;
  top: 39px;
  left: 24px;

  font-weight: 600;
  font-size: 17px;
  line-height: 20.29px;

  color: #4e5968;
`;

const StyledBtn = styled.button`
  position:absolute;
  width: 84px;
  height: 38px;
  top: 19px;
  left: 282px;
  border:none;
  border-radius:8px;
  opacity: 0px;
  background-color: #3182F6;

  font-size:15px;
  font-weight:500;
  line-height:17.9px;
  text-align:center;
  color:#FFFFFF;
`;

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);

  const navigate = useNavigate();
  const handleOrder = () => {
    navigate("/cart");
  };

  return (
    <Stylednav>
      <StyledTotalOrder>총 주문금액</StyledTotalOrder>
      <StyledTotalFee>
        {insertComma(menus.reduce((acc, cur) => acc + cur.price * cur.count, 0))}원
      </StyledTotalFee>
      <StyledBtn onClick={handleOrder} type="button">
        주문하기
      </StyledBtn>
    </Stylednav>
  );
};

export default OrderBar;
