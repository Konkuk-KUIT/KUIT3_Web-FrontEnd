import React from "react";
import useCartStore from "../../store/useCartStore";
import * as S from "./OrderBar.styles.jsx";

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const handleOrder = () => {};
  const store = useCartStore((state) => state.store);

  return (
    <S.OrderBarBox>
      <S.OrderTotalPriceBox>
        <span>총 주문금액</span>
        <div>
          <span>{menus.reduce((acc, cur) => acc + cur.price, 0)}</span>
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
