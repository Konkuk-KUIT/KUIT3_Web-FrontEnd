import React from "react";
import useCartStore from "../../store/useCartStore";
import * as S from "./OrderBar.styles.jsx";

const OrderBar = () => {
  const totalPrice = useCartStore((state) => state.totalPrice);
  const handleOrder = () => {};

  return (
    <S.OrderBarBox>
      <S.OrderTotalPriceBox>
        <span>총 주문금액</span>
        <div>
          <span>{totalPrice}</span>
          <span>원</span>
        </div>
      </S.OrderTotalPriceBox>
      <S.OrderBtn onClick={handleOrder} type="button">
        주문하기
      </S.OrderBtn>
    </S.OrderBarBox>
  ); //store? -> optional chaining => store가 있을 때만 뒤를 실행
};

export default OrderBar;
