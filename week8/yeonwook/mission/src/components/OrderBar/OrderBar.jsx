import React from "react";
import useCartStore from "../../store/useCartStore";
import { Price, Cost, CostDiv, DisabledButton, EnableButton, OrderBarDiv } from "./OrderBar.styles";
import { useNavigate } from "react-router-dom";

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  const totalCost = useCartStore((state)=> state.total);
  const navigate = useNavigate();

  const handleOrder = () => {
    if(totalCost>0){
      navigate('/cart');
    }
    else{
      alert("주문금액이 0원이상이어야 합니다!")
    }
  };

  return (
    <OrderBarDiv>
      <CostDiv>
        <Cost>총 주문금액</Cost>
        <Price>{totalCost}원</Price>
      </CostDiv>
      {totalCost>0 ?
        <EnableButton onClick={handleOrder} type="button">
          {store?.name}에서 주문하기
        </EnableButton>:
        <DisabledButton onClick={handleOrder} type="button">
          {store?.name}에서 주문하기
        </DisabledButton>
      }
    </OrderBarDiv>
  );
};

export default OrderBar;
