import React from "react";
import {
  CartDivider,
  CartBox,
  CartBoxTitle,
  CartMinNotifyTv,
  CartMenuAmount,
  CartAddBtn,
  CartFeeBox,
  CartFeeTvBox,
  CartFeeTv,
  CartTotalFeeTvBox,
  CartBtnBox,
  CartBtnTv,
  CartBtn,
} from "./Cart.styles";
import {
  StyledMenuBox,
  StyledMenuLeftDiv,
  StyledMenuImg,
  StyledMenuTv,
  StyledMenuName,
  StyledMenuPrice,
  StyledMenuIng,
} from "../../components/MenuItem/MenuItem.styles";

const Cart = () => {
  return (
    <>
      <CartBox>
        <CartBoxTitle>배달주소</CartBoxTitle>
      </CartBox>

      <CartDivider />

      <CartBox>
        <CartBoxTitle>가게명</CartBoxTitle>
        <CartMinNotifyTv>최소금액 미달</CartMinNotifyTv>
      </CartBox>

      <StyledMenuBox>
        <StyledMenuLeftDiv>
          <StyledMenuImg />
          <StyledMenuTv>
            <StyledMenuName>메뉴명</StyledMenuName>
            <StyledMenuIng>메뉴재료</StyledMenuIng>
            <StyledMenuPrice>000원</StyledMenuPrice>
          </StyledMenuTv>
        </StyledMenuLeftDiv>

        <CartMenuAmount>0개</CartMenuAmount>
      </StyledMenuBox>

      <CartAddBtn>더 담기 +</CartAddBtn>

      <CartDivider />

      <CartFeeBox>
        <CartFeeTvBox>
          <CartFeeTv color="#8b95A1">주문금액</CartFeeTv>
          <CartFeeTv color="#505967">000원</CartFeeTv>
        </CartFeeTvBox>

        <CartFeeTvBox>
          <CartFeeTv color="#8b95A1">배달요금</CartFeeTv>
          <CartFeeTv color="#505967">000원</CartFeeTv>
        </CartFeeTvBox>

        <CartTotalFeeTvBox>
          <CartFeeTv color="#4E5968">총 결제금액</CartFeeTv>
          <CartFeeTv color="#4E5968" weight={600}>
            000원
          </CartFeeTv>
        </CartTotalFeeTvBox>
      </CartFeeBox>

      <CartBtnBox>
        <CartBtnTv>최소 주문금액 000원</CartBtnTv>
        <CartBtn>000원 결제하기</CartBtn>
      </CartBtnBox>
    </>
  );
};

export default Cart;
