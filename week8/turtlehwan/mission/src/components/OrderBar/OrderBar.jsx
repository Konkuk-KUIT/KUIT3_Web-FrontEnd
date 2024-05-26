import React from "react";
import useCartStore from "../../store/useCartStore";
import HIImg from "../../asset/home-indicator.svg";
import * as S from "../../pages/Stores/Stores.styles";
import { Link } from "react-router-dom";

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const handleOrder = () => {};
  const store = useCartStore((state) => state.store);

  return (
    <S.BottomContainer>
      <S.BottomOrder>
        <section>
          <S.BottomOrderText>총 주문금액</S.BottomOrderText>
          <S.BottomOrderPrice>
            {menus.reduce((acc, cur) => acc + cur.price, 0)}원
          </S.BottomOrderPrice>
        </section>
        <Link to="/cart">
          <S.BottomOrderBtn onClick={handleOrder}>
            {store?.name}에서 주문하기
          </S.BottomOrderBtn>
        </Link>
      </S.BottomOrder>
      <S.HomeIndicator>
        <img src={HIImg} />
      </S.HomeIndicator>
    </S.BottomContainer>
  );
};

export default OrderBar;
