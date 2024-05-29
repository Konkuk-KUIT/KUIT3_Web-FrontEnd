import React from "react";
import useCartStore from "../../store/useCartStore";
import { useNavigate } from "react-router-dom";
import { Total,GotoCart,Price,PriceNumber } from "./OrderBar.styles";

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  const navigate=useNavigate();

  const handleOrder = () => {
    navigate('/cart');
  };

  return (
    <Total>
      <Price>
        <div>총 주문금액</div>
        <PriceNumber>{menus.reduce((acc, cur) => acc + cur.price, 0)}원</PriceNumber>
      </Price>
      <GotoCart onClick={handleOrder} type="button">
        주문하기
      </GotoCart>
    </Total>
  );
};

export default OrderBar;
