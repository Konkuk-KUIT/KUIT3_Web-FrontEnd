import React from "react";
import useCartStore from "../../store/useCartStore";
import { styled } from "styled-components";

const OrderBarBox = styled.div`
  box-sizing: border-box;
  padding: 16px 24px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #fff;
  box-shadow: 0px -8px 16px 0px #0000001a;
  border-radius: 16px 16px 0px 0px;
  display: flex;
  justify-content: space-between;
`;

const OrderTotalPriceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  span {
    font-family: "Pretendard";
    font-size: 15px;
    color: #6B7684;
  }

  div > span {
    font-family: "PretendardSemiBold";
    font-size: 17px;
  }
`;

const OrderBtn = styled.button`
  width: 84px;
  height: 38px;
  background-color: #3182f6;
  border: none;
  border-radius: 8px;
  font-family: "PretendardMedium";
  font-size: 15px;
  color: #fff;
`;

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const handleOrder = () => {};
  const store = useCartStore((state) => state.store);

  return (
    <OrderBarBox>
      <OrderTotalPriceBox>
        <span>총 주문금액</span>
        <div>
          <span>{menus.reduce((acc, cur) => acc + cur.price, 0)}</span>
          <span>원</span>
        </div>
      </OrderTotalPriceBox>
      <OrderBtn onClick={handleOrder} type="button">
        주문하기
      </OrderBtn>
    </OrderBarBox>
  ); //store? -> optional chaining => store가 있을 때만 뒤를 실행
};

export default OrderBar;
