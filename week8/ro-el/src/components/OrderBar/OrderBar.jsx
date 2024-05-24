import React from "react";
import { useNavigate } from "react-router-dom";

import useCartStore from "../../store/useCartStore";
import * as S from "./OrderBar.styles.jsx";

const OrderBar = () => {
  const totalPrice = useCartStore((state) => state.totalPrice);

  const navigate = useNavigate();
  const handleOrder = () => {
    navigate("/cart");
  };

  return (
    <S.OrderBarBox>
      <S.OrderTotalPriceBox>
        <span>총 주문금액</span>
        <div>
          <span>{totalPrice.toLocaleString('ko-KR')}</span>
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
