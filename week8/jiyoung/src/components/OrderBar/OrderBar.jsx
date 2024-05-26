import React from "react";
import useCartStore from "../../store/useCartStore";
import {
  StyledOrderBox,
  StyledOrderLeftDiv,
  StyledOrderLeftDiv1,
  StyledOrderLeftDiv2,
  StyledOrderBtn,
} from "./OrderBar.styles";
import { useNavigate } from "react-router-dom";

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const navigate = useNavigate();
  const handleOrder = () => {
    navigate("/cart");
    console.log(menus);
  };
  // const store = useCartStore((state) => state.store);

  return (
    <StyledOrderBox>
      <StyledOrderLeftDiv>
        <StyledOrderLeftDiv1>총 주문금액</StyledOrderLeftDiv1>
        <StyledOrderLeftDiv2>
          {menus.reduce((acc, cur) => acc + cur.price, 0)}원
        </StyledOrderLeftDiv2>
      </StyledOrderLeftDiv>

      <StyledOrderBtn onClick={handleOrder} type="button">
        {/* store? => store가 존재할 때에만 뒤에 있는 부분이 실행됨 */}
        {/* {store?.name}에서 주문하기 */}
        주문하기
      </StyledOrderBtn>
    </StyledOrderBox>
  );
};

export default OrderBar;
