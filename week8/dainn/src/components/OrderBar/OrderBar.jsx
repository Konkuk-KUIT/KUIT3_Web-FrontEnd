import React from "react";
import useCartStore from "../../store/useCartStore";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const StyledDiv = styled.div`
  display: flex;
  width: 390px;
  height: 111px;
  
`

const StyledP = styled.div`
  margin-top: 16px;
  margin-left: 24px;

  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  line-height: 17.9px;
  text-align: left;
  
  color: #6B7684;
`

const StyledP1 = styled.div`
  margin-top: 5px;
  margin-left: 24px;

  width: 66px;
  height: 20px;


  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: left;
  
  color: #4E5968;
`
const StyledOrder = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledButton = styled.div`
width: 84px;
height: 38px;
margin-top: 19px;
margin-left: 189px;
border-radius: 8px;
opacity: 0px;


background: #3182F6;
`

const StyledText = styled.div`

Height: 18px;
margin-top: 10px;
margin-left: 16px;
gap: 0px;


font-family: Pretendard;
font-size: 15px;
font-weight: 500;
line-height: 17.9px;
text-align: center;

color: #FFFFFF;

`

const OrderBar = () => {
  const navigate = useNavigate();
  const menus = useCartStore((state) => state.menus);

  const handleOrder = () => {

    navigate('/cart');
  };
  const store = useCartStore((state) => state.store);
  //console.log("strle:", store)
  return (
    <StyledDiv>
      <StyledOrder>
      <StyledP>총 주문금액</StyledP>
      <StyledP1>{menus.reduce((acc, cur) => acc + cur.price, 0)}원</StyledP1>
      </StyledOrder>
      <StyledButton onClick={handleOrder} type="button">
        <StyledText>주문하기</StyledText>
        {/* <StyledText>{store?.name}에서 주문하기</StyledText> */}
      </StyledButton>
    </StyledDiv>
  );
};

export default OrderBar;
