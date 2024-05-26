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
import useCartStore from "../../store/useCartStore";

const Cart = () => {
  const store = useCartStore((state) => state.store); // 전역 상태에서 store 가져오기
  const menus = useCartStore((state) => state.menus);
  const totalMenuFee = menus.reduce((acc, cur) => acc + cur.price, 0); // 주문금액
  const isOrderable = totalMenuFee >= store.minDeliveryPrice; // 주문가능여부

  if (!store || menus.length === 0) {
    return <div>장바구니가 비어 있습니다.</div>; // 메뉴가 없을 경우 메시지 출력
  }

  return (
    <>
      <CartBox>
        <CartBoxTitle>배달주소</CartBoxTitle>
      </CartBox>

      <CartDivider />

      <CartBox>
        <CartBoxTitle>{store.name}</CartBoxTitle>
        {!isOrderable && <CartMinNotifyTv>최소금액 미달</CartMinNotifyTv>}
      </CartBox>

      {menus.map((menu, index) => (
        <StyledMenuBox key={index}>
          <StyledMenuLeftDiv>
            <StyledMenuImg />
            <StyledMenuTv>
              <StyledMenuName>{menu.name}</StyledMenuName>
              <StyledMenuIng>{menu.ingredients}</StyledMenuIng>
              <StyledMenuPrice>{menu.price}원</StyledMenuPrice>
            </StyledMenuTv>
          </StyledMenuLeftDiv>

          <CartMenuAmount>1개</CartMenuAmount>
        </StyledMenuBox>
      ))}

      <CartAddBtn>더 담기 +</CartAddBtn>

      <CartDivider />

      <CartFeeBox>
        <CartFeeTvBox>
          <CartFeeTv color="#8b95A1">주문금액</CartFeeTv>
          <CartFeeTv color="#505967">{totalMenuFee}원</CartFeeTv>
        </CartFeeTvBox>

        <CartFeeTvBox>
          <CartFeeTv color="#8b95A1">배달요금</CartFeeTv>
          <CartFeeTv color="#505967">{store.deliveryFee}원</CartFeeTv>
        </CartFeeTvBox>

        <CartTotalFeeTvBox>
          <CartFeeTv color="#4E5968">총 결제금액</CartFeeTv>
          <CartFeeTv color="#4E5968" weight={600}>
            {totalMenuFee + store.deliveryFee}원
          </CartFeeTv>
        </CartTotalFeeTvBox>
      </CartFeeBox>

      <CartBtnBox>
        <CartBtnTv>최소 주문금액 {store.minDeliveryPrice}원</CartBtnTv>
        <CartBtn bgColor={isOrderable ? "#3182f6" : "#D0DFFB"}>
          {totalMenuFee + store.deliveryFee}원 결제하기
        </CartBtn>
      </CartBtnBox>
    </>
  );
};

export default Cart;
