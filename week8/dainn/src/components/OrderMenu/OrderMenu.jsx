import React from "react";
import useCartStore from "../../store/useCartStore";
import styled from "styled-components";



const StyledOrder = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 390px;
height: 129px;
gap: 0px;
opacity: 0px;
top:205px;

`
const StyledMin = styled.div`
    left: 113px;
    gap: 0px;
    opacity: 0px;

    font-family: Pretendard;
    font-size: 17px;
    font-weight: 500;
    line-height: 20.29px;
    text-align: center;


    color: #6B7684;
`

const StyledButton = styled.div`
width: 350px;
height: 56px;
margin-top: 19px;
margin-left: 20px;
gap: 0px;
border-radius: 16px;
opacity: 0px;
display: flex;
justify-content: center;
background: ${props => props.isAble ? '#1514db' : '#D0DFFB'};

`

const StyledP = styled.div`
    margin-top: 18px;
    color: #FFFFFF;

`


const OrderMenu = () => {
    const store = useCartStore((state) => state.store);
    const menus = useCartStore((state) => state.menus);
    const totalPrice = menus.reduce((total, menu) => total + menu.price, 0);
    console.log(store)
    const deliveryFee = store.deliveryFee;
//    const totalPrice = useCartStore((state) => state.totalPrice);

    const isOverMin = totalPrice >= store.minDeliveryPrice;

    return (
      <StyledOrder>
        <StyledMin>최소 주문 금액 {store.minDeliveryPrice}원</StyledMin>
        <StyledButton isAble={isOverMin} type="button">
            <StyledP>{totalPrice+deliveryFee}원 결제하기</StyledP>
        </StyledButton>
      </StyledOrder>
    );
  };
  
  export default OrderMenu;